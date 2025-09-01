import React, { useState } from "react";
import { NavigationHeader } from "@/components/sections/navigation-header";
import { ModernFooter } from "@/components/sections/modern-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  Share2,
  Plus,
  Target,
  Zap,
  BarChart3,
  PieChart,
  Activity,
  GitBranch,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Layers,
  Workflow
} from "lucide-react";

const ProjectManagement = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedProject, setSelectedProject] = useState("ai-chatbot");

  // Mock data for demonstration
  const projects = [
    {
      id: "ai-chatbot",
      name: "AI Chatbot Development",
      type: "AI Solutions",
      status: "In Progress",
      progress: 75,
      budget: 8500,
      spent: 6375,
      startDate: "2024-01-01",
      deadline: "2024-02-15",
      client: "TechCorp Inc.",
      description: "Advanced AI chatbot for customer support automation with NLP capabilities",
      priority: "High",
      team: [
        { name: "John Doe", role: "AI Engineer", avatar: "JD" },
        { name: "Sarah Smith", role: "Frontend Dev", avatar: "SS" },
        { name: "Mike Johnson", role: "Backend Dev", avatar: "MJ" }
      ],
      technologies: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL"],
      milestones: [
        { name: "Initial Setup", completed: true, date: "2024-01-05" },
        { name: "Model Training", completed: true, date: "2024-01-15" },
        { name: "Frontend Integration", completed: false, date: "2024-01-25" },
        { name: "Testing & Deployment", completed: false, date: "2024-02-10" }
      ]
    },
    {
      id: "ecommerce",
      name: "E-commerce Platform",
      type: "Web Development",
      status: "Review",
      progress: 90,
      budget: 12000,
      spent: 10800,
      startDate: "2023-12-01",
      deadline: "2024-01-30",
      client: "Fashion Hub",
      description: "Full-stack e-commerce solution with payment integration and inventory management",
      priority: "Medium",
      team: [
        { name: "Alice Brown", role: "Full Stack Dev", avatar: "AB" },
        { name: "Tom Wilson", role: "UI/UX Designer", avatar: "TW" }
      ],
      technologies: ["React", "Next.js", "Stripe", "MongoDB", "Tailwind"],
      milestones: [
        { name: "Design System", completed: true, date: "2023-12-10" },
        { name: "Core Development", completed: true, date: "2024-01-05" },
        { name: "Payment Integration", completed: true, date: "2024-01-20" },
        { name: "Final Testing", completed: false, date: "2024-01-28" }
      ]
    },
    {
      id: "nft-marketplace",
      name: "NFT Marketplace",
      type: "Web3",
      status: "Planning",
      progress: 25,
      budget: 25000,
      spent: 6250,
      startDate: "2024-01-15",
      deadline: "2024-03-20",
      client: "Crypto Collective",
      description: "Decentralized NFT marketplace with minting, trading, and staking capabilities",
      priority: "High",
      team: [
        { name: "David Lee", role: "Blockchain Dev", avatar: "DL" },
        { name: "Emma Davis", role: "Smart Contract Dev", avatar: "ED" },
        { name: "Chris Taylor", role: "Frontend Dev", avatar: "CT" },
        { name: "Lisa Wang", role: "UI/UX Designer", avatar: "LW" }
      ],
      technologies: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum"],
      milestones: [
        { name: "Smart Contract Design", completed: true, date: "2024-01-20" },
        { name: "Contract Development", completed: false, date: "2024-02-10" },
        { name: "Frontend Development", completed: false, date: "2024-02-28" },
        { name: "Testing & Deployment", completed: false, date: "2024-03-15" }
      ]
    }
  ];

  const currentProject = projects.find(p => p.id === selectedProject) || projects[0];

  const tasks = [
    {
      id: 1,
      title: "Implement NLP Model Training",
      status: "In Progress",
      assignee: "John Doe",
      priority: "High",
      dueDate: "2024-01-25",
      progress: 80,
      labels: ["AI", "Backend"]
    },
    {
      id: 2,
      title: "Design Chat Interface",
      status: "Review",
      assignee: "Sarah Smith",
      priority: "Medium",
      dueDate: "2024-01-22",
      progress: 100,
      labels: ["Frontend", "UI"]
    },
    {
      id: 3,
      title: "API Integration Testing",
      status: "Todo",
      assignee: "Mike Johnson",
      priority: "Medium",
      dueDate: "2024-01-28",
      progress: 0,
      labels: ["Backend", "Testing"]
    },
    {
      id: 4,
      title: "Performance Optimization",
      status: "Todo",
      assignee: "John Doe",
      priority: "Low",
      dueDate: "2024-02-05",
      progress: 0,
      labels: ["Optimization"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-secondary text-secondary-foreground";
      case "Review": return "bg-warning text-warning-foreground";
      case "Todo": return "bg-accent text-accent-foreground";
      case "Completed": return "bg-success text-success-foreground";
      case "Planning": return "bg-muted text-muted-foreground";
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
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
              Project Management
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
              Advanced project tracking, team collaboration, and delivery optimization
            </p>
          </div>
        </div>
      </section>

      {/* Project Selector */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Select value={selectedProject} onValueChange={setSelectedProject}>
                <SelectTrigger className="w-64 bg-surface-1 border-border">
                  <SelectValue placeholder="Select Project" />
                </SelectTrigger>
                <SelectContent>
                  {projects.map((project) => (
                    <SelectItem key={project.id} value={project.id}>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        {project.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Badge variant="outline" className="bg-surface-1">
                {currentProject.type}
              </Badge>
              
              <Badge className={getPriorityColor(currentProject.priority)} variant="outline">
                {currentProject.priority} Priority
              </Badge>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button size="sm" className="bg-gradient-primary">
                <Plus className="w-4 h-4 mr-2" />
                New Task
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-6 w-fit bg-surface-1 border border-border mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="tasks" className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Tasks
              </TabsTrigger>
              <TabsTrigger value="timeline" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Timeline
              </TabsTrigger>
              <TabsTrigger value="team" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Team
              </TabsTrigger>
              <TabsTrigger value="files" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Files
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Project Details */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="bg-gradient-glass border-white/10">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl mb-2">{currentProject.name}</CardTitle>
                          <CardDescription className="text-base">
                            {currentProject.description}
                          </CardDescription>
                        </div>
                        <Badge className={getStatusColor(currentProject.status)}>
                          {currentProject.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Progress Section */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium">Overall Progress</span>
                          <span className="text-2xl font-bold text-primary">{currentProject.progress}%</span>
                        </div>
                        <Progress value={currentProject.progress} className="h-3" />
                      </div>

                      {/* Project Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-surface-1 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-primary mb-1">
                            ${currentProject.spent.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">Spent</div>
                        </div>
                        <div className="bg-surface-1 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-secondary mb-1">
                            ${(currentProject.budget - currentProject.spent).toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">Remaining</div>
                        </div>
                        <div className="bg-surface-1 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-accent mb-1">
                            {currentProject.team.length}
                          </div>
                          <div className="text-sm text-muted-foreground">Team Size</div>
                        </div>
                        <div className="bg-surface-1 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-success mb-1">
                            {Math.ceil((new Date(currentProject.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
                          </div>
                          <div className="text-sm text-muted-foreground">Days Left</div>
                        </div>
                      </div>

                      {/* Milestones */}
                      <div>
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5" />
                          Milestones
                        </h3>
                        <div className="space-y-3">
                          {currentProject.milestones.map((milestone, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-surface-1 rounded-lg">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                milestone.completed ? 'bg-success' : 'bg-muted'
                              }`}>
                                {milestone.completed ? (
                                  <CheckCircle className="w-4 h-4 text-white" />
                                ) : (
                                  <div className="w-2 h-2 bg-white rounded-full" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className={`font-medium ${milestone.completed ? 'line-through text-muted-foreground' : ''}`}>
                                  {milestone.name}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Due: {new Date(milestone.date).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technology Stack */}
                      <div>
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <Code className="w-5 h-5" />
                          Technology Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="bg-surface-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Project Info */}
                  <Card className="bg-gradient-glass border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Project Info
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Client</div>
                        <div className="font-medium">{currentProject.client}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Start Date</div>
                        <div className="font-medium">{new Date(currentProject.startDate).toLocaleDateString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Deadline</div>
                        <div className="font-medium">{new Date(currentProject.deadline).toLocaleDateString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Budget</div>
                        <div className="font-medium">${currentProject.budget.toLocaleString()}</div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Team Members */}
                  <Card className="bg-gradient-glass border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Team Members
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {currentProject.team.map((member, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 hover:bg-surface-1 rounded-lg transition-colors">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {member.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{member.name}</div>
                            <div className="text-sm text-muted-foreground">{member.role}</div>
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
                        Team Chat
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Meeting
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        Generate Report
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Export Data
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tasks" className="mt-0">
              <Card className="bg-gradient-glass border-white/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Task Management</CardTitle>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                      <Button size="sm" className="bg-gradient-primary">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Task
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <div key={task.id} className="bg-surface-1 border border-border rounded-xl p-4 hover:bg-surface-2 transition-all duration-300">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold">{task.title}</h3>
                              <Badge className={getStatusColor(task.status)}>
                                {task.status}
                              </Badge>
                              <Badge variant="outline" className={getPriorityColor(task.priority)}>
                                {task.priority}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>Assigned to: {task.assignee}</span>
                              <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progress</span>
                            <span className="font-medium">{task.progress}%</span>
                          </div>
                          <Progress value={task.progress} className="h-2" />
                          
                          <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                              {task.labels.map((label, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {label}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Edit3 className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <MessageSquare className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeline" className="mt-0">
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Timeline View</h3>
                <p className="text-muted-foreground">Interactive Gantt chart and project timeline coming soon...</p>
              </div>
            </TabsContent>

            <TabsContent value="team" className="mt-0">
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Team Management</h3>
                <p className="text-muted-foreground">Team collaboration and management tools coming soon...</p>
              </div>
            </TabsContent>

            <TabsContent value="files" className="mt-0">
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">File Management</h3>
                <p className="text-muted-foreground">Document storage and version control coming soon...</p>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-0">
              <div className="text-center py-12">
                <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Project Analytics</h3>
                <p className="text-muted-foreground">Advanced analytics and reporting coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <ModernFooter />
    </div>
  );
};

export default ProjectManagement;