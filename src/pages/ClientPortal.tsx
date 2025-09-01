import React, { useState } from "react";
import { NavigationHeader } from "@/components/sections/navigation-header";
import { ModernFooter } from "@/components/sections/modern-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  FileText, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  FolderOpen,
  Download,
  Bell,
  Settings,
  Search,
  Filter,
  Star,
  CheckCircle,
  AlertCircle,
  Play,
  Pause,
  MoreHorizontal,
  Eye,
  Edit3,
  Share2
} from "lucide-react";

const ClientPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [notifications, setNotifications] = useState(3);

  // Mock data for demonstration
  const projects = [
    {
      id: 1,
      name: "AI Chatbot Development",
      type: "AI Solutions",
      status: "In Progress",
      progress: 75,
      budget: "$8,500",
      spent: "$6,375",
      deadline: "2024-02-15",
      team: ["John Doe", "Sarah Smith", "Mike Johnson"],
      description: "Custom AI chatbot for customer support automation",
      priority: "High",
      lastUpdate: "2 hours ago"
    },
    {
      id: 2,
      name: "E-commerce Platform",
      type: "Web Development",
      status: "Review",
      progress: 90,
      budget: "$12,000",
      spent: "$10,800",
      deadline: "2024-01-30",
      team: ["Alice Brown", "Tom Wilson"],
      description: "Full-stack e-commerce solution with payment integration",
      priority: "Medium",
      lastUpdate: "1 day ago"
    },
    {
      id: 3,
      name: "NFT Marketplace",
      type: "Web3",
      status: "Planning",
      progress: 25,
      budget: "$25,000",
      spent: "$6,250",
      deadline: "2024-03-20",
      team: ["David Lee", "Emma Davis", "Chris Taylor", "Lisa Wang"],
      description: "Decentralized NFT marketplace with minting capabilities",
      priority: "High",
      lastUpdate: "3 days ago"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "update",
      title: "AI Chatbot Development - Phase 2 Completed",
      description: "Training module integration finished ahead of schedule",
      time: "2 hours ago",
      user: "John Doe"
    },
    {
      id: 2,
      type: "message",
      title: "New Message from Sarah Smith",
      description: "Design mockups ready for review",
      time: "4 hours ago",
      user: "Sarah Smith"
    },
    {
      id: 3,
      type: "milestone",
      title: "E-commerce Platform Milestone Reached",
      description: "Payment gateway integration completed",
      time: "1 day ago",
      user: "Alice Brown"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-secondary text-secondary-foreground";
      case "Review": return "bg-warning text-warning-foreground";
      case "Planning": return "bg-accent text-accent-foreground";
      case "Completed": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-error";
      case "Medium": return "text-warning";
      case "Low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-brand relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-glass border border-white/20 rounded-2xl flex items-center justify-center animate-float">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
              Client Portal
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
              Track your projects, communicate with the team, and manage everything in one place
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-glass backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-white/70">Active Projects</div>
              </div>
              <div className="bg-glass backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">87%</div>
                <div className="text-white/70">Avg. Progress</div>
              </div>
              <div className="bg-glass backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">12</div>
                <div className="text-white/70">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center justify-between mb-8">
              <TabsList className="grid grid-cols-4 w-fit bg-surface-1 border border-border">
                <TabsTrigger value="dashboard" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Dashboard
                </TabsTrigger>
                <TabsTrigger value="projects" className="flex items-center gap-2">
                  <FolderOpen className="w-4 h-4" />
                  Projects
                </TabsTrigger>
                <TabsTrigger value="messages" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Messages
                </TabsTrigger>
                <TabsTrigger value="files" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Files
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="relative">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                  {notifications > 0 && (
                    <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-error text-white text-xs">
                      {notifications}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>

            <TabsContent value="dashboard" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Projects Overview */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="bg-gradient-glass border-white/10">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center justify-between">
                        Active Projects
                        <Button variant="outline" size="sm">
                          View All
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {projects.map((project) => (
                        <div
                          key={project.id}
                          className="bg-surface-1 border border-border rounded-xl p-6 hover:bg-surface-2 transition-all duration-300 group"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                  {project.name}
                                </h3>
                                <Badge className={getStatusColor(project.status)}>
                                  {project.status}
                                </Badge>
                                <Badge variant="outline" className={getPriorityColor(project.priority)}>
                                  {project.priority}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground mb-3">{project.description}</p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  Due: {new Date(project.deadline).toLocaleDateString()}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  Updated: {project.lastUpdate}
                                </span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span className="font-medium">{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                            
                            <div className="flex items-center justify-between pt-2">
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">Team:</span>
                                <div className="flex -space-x-2">
                                  {project.team.slice(0, 3).map((member, index) => (
                                    <Avatar key={index} className="w-6 h-6 border-2 border-background">
                                      <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                                        {member.split(' ').map(n => n[0]).join('')}
                                      </AvatarFallback>
                                    </Avatar>
                                  ))}
                                  {project.team.length > 3 && (
                                    <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs border-2 border-background">
                                      +{project.team.length - 3}
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-4">
                                <span className="text-sm">
                                  <span className="text-muted-foreground">Budget:</span>
                                  <span className="font-medium ml-1">{project.spent} / {project.budget}</span>
                                </span>
                                <div className="flex gap-2">
                                  <Button size="sm" variant="outline">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <MessageSquare className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Activity & Quick Actions */}
                <div className="space-y-6">
                  {/* Recent Activity */}
                  <Card className="bg-gradient-glass border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bell className="w-5 h-5" />
                        Recent Activity
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex gap-3 p-3 bg-surface-1 rounded-lg hover:bg-surface-2 transition-colors">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            {activity.type === "update" && <CheckCircle className="w-4 h-4 text-primary" />}
                            {activity.type === "message" && <MessageSquare className="w-4 h-4 text-secondary" />}
                            {activity.type === "milestone" && <Star className="w-4 h-4 text-accent" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm leading-tight">{activity.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs text-muted-foreground">{activity.user}</span>
                              <span className="text-xs text-muted-foreground">{activity.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="bg-gradient-glass border-white/10">
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full justify-start" variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Start New Conversation
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        Request Project Update
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download Files
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Meeting
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="mt-0">
              <div className="text-center py-12">
                <FolderOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Projects Section</h3>
                <p className="text-muted-foreground">Detailed project management interface coming soon...</p>
              </div>
            </TabsContent>

            <TabsContent value="messages" className="mt-0">
              <div className="text-center py-12">
                <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Messages Section</h3>
                <p className="text-muted-foreground">Team communication interface coming soon...</p>
              </div>
            </TabsContent>

            <TabsContent value="files" className="mt-0">
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Files Section</h3>
                <p className="text-muted-foreground">Document management interface coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
};

export default ClientPortal;