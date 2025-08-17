import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, Users, Briefcase, MessageCircle } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  required_skills: string[];
  team_size: number;
  status: string;
  created_at: string;
}

interface Profile {
  id: string;
  display_name: string;
  username: string;
  skills: string[];
  experience_level: string;
}

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [userProjects, setUserProjects] = useState<Project[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    
    fetchDashboardData();
  }, [user, navigate]);

  const fetchDashboardData = async () => {
    try {
      // Fetch user profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user?.id)
        .single();
      
      setProfile(profileData);

      // Fetch all projects
      const { data: allProjects } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'open')
        .order('created_at', { ascending: false })
        .limit(6);
      
      setProjects(allProjects || []);

      // Fetch user's projects
      const { data: myProjects } = await supabase
        .from('projects')
        .select('*')
        .eq('creator_id', user?.id)
        .order('created_at', { ascending: false });
      
      setUserProjects(myProjects || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load dashboard data"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CM</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back, {profile?.display_name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/profile')}>
                Profile
              </Button>
              <Button variant="ghost" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate('/projects/create')}>
            <CardContent className="flex items-center space-x-4 p-6">
              <PlusCircle className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Create Project</h3>
                <p className="text-sm text-muted-foreground">Start a new collaboration</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate('/projects')}>
            <CardContent className="flex items-center space-x-4 p-6">
              <Briefcase className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Browse Projects</h3>
                <p className="text-sm text-muted-foreground">Find opportunities</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate('/collaborators')}>
            <CardContent className="flex items-center space-x-4 p-6">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Find Collaborators</h3>
                <p className="text-sm text-muted-foreground">Connect with talent</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="flex items-center space-x-4 p-6">
              <MessageCircle className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Messages</h3>
                <p className="text-sm text-muted-foreground">View conversations</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Projects */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-foreground">Recent Projects</h2>
              <Button variant="outline" onClick={() => navigate('/projects')}>
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {projects.length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground">No projects available yet.</p>
                    <Button className="mt-4" onClick={() => navigate('/projects/create')}>
                      Create the first project
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                projects.map((project) => (
                  <Card key={project.id} className="hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => navigate(`/projects/${project.id}`)}>
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge variant="secondary">{project.category}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.required_skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {project.required_skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.required_skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>

          {/* My Projects */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-foreground">My Projects</h2>
              <Button onClick={() => navigate('/projects/create')}>
                Create New
              </Button>
            </div>
            <div className="space-y-4">
              {userProjects.length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground">You haven't created any projects yet.</p>
                    <Button className="mt-4" onClick={() => navigate('/projects/create')}>
                      Create Your First Project
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                userProjects.map((project) => (
                  <Card key={project.id} className="hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => navigate(`/projects/${project.id}`)}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <Badge variant={project.status === 'open' ? 'default' : 'secondary'}>
                          {project.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Team size: {project.team_size}</span>
                        <span>{project.category}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;