import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { InternalNotesEditor } from "@/components/InternalNotesEditor";
import { ArrowLeft, MessageSquare, FileText, Users, Settings, Clock } from "lucide-react";

const AgentWorkspace = () => {
  const { id } = useParams();
  
  // Mock ticket data
  const ticket = {
    id: id || "TKT-001",
    title: "Login page not loading correctly on mobile devices",
    status: "in-progress" as const,
    priority: "high" as const,
    assignedTo: "Sarah Johnson",
    timeElapsed: "2h 15m"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 py-8 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Link 
            to={`/ticket/${id}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Ticket Details
          </Link>
          
          <div className="flex items-center gap-4">
            <Badge className="bg-status-in-progress text-white">
              In Progress
            </Badge>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">{ticket.timeElapsed}</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <Card className="shadow-soft border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm text-muted-foreground">#{ticket.id}</span>
                    <Badge variant="outline" className="text-xs">
                      Agent Workspace
                    </Badge>
                  </div>
                  <h1 className="text-2xl font-bold text-foreground">{ticket.title}</h1>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Reassign
                  </Button>
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Escalate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Work Area */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="notes" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="notes" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Notes
                </TabsTrigger>
                <TabsTrigger value="reply" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Reply
                </TabsTrigger>
                <TabsTrigger value="knowledge" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Knowledge
                </TabsTrigger>
                <TabsTrigger value="tools" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Tools
                </TabsTrigger>
              </TabsList>

              <TabsContent value="notes">
                <InternalNotesEditor />
              </TabsContent>

              <TabsContent value="reply">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Reply to Customer
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Quick Reply Templates:</p>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm">We're investigating</Button>
                        <Button variant="outline" size="sm">Need more info</Button>
                        <Button variant="outline" size="sm">Issue resolved</Button>
                        <Button variant="outline" size="sm">Escalated to team</Button>
                      </div>
                    </div>
                    <textarea 
                      className="w-full min-h-[200px] p-4 border rounded-lg resize-none"
                      placeholder="Type your response to the customer..."
                    />
                    <div className="flex gap-3">
                      <Button className="bg-gradient-primary">Send Reply</Button>
                      <Button variant="outline">Save Draft</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="knowledge">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Knowledge Base
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                        <h4 className="font-medium mb-1">Mobile Login Issues Troubleshooting</h4>
                        <p className="text-sm text-muted-foreground">Common solutions for mobile authentication problems</p>
                      </div>
                      <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                        <h4 className="font-medium mb-1">CSS Responsive Design Guidelines</h4>
                        <p className="text-sm text-muted-foreground">Best practices for mobile-responsive layouts</p>
                      </div>
                      <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                        <h4 className="font-medium mb-1">Browser Compatibility Matrix</h4>
                        <p className="text-sm text-muted-foreground">Supported features across different browsers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tools">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      Agent Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="h-20 flex-col">
                        <Clock className="h-6 w-6 mb-2" />
                        Time Tracker
                      </Button>
                      <Button variant="outline" className="h-20 flex-col">
                        <FileText className="h-6 w-6 mb-2" />
                        Generate Report
                      </Button>
                      <Button variant="outline" className="h-20 flex-col">
                        <MessageSquare className="h-6 w-6 mb-2" />
                        Screen Share
                      </Button>
                      <Button variant="outline" className="h-20 flex-col">
                        <Users className="h-6 w-6 mb-2" />
                        Request Backup
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-primary">
                  Change Priority
                </Button>
                <Button variant="outline" className="w-full">
                  Add to Queue
                </Button>
                <Button variant="outline" className="w-full">
                  Request Escalation
                </Button>
                <Link to={`/ticket/${id}/resolve`}>
                  <Button className="w-full bg-gradient-accent">
                    Propose Resolution
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Ticket Stats */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Time Spent:</span>
                  <span className="text-sm font-medium">{ticket.timeElapsed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Responses:</span>
                  <span className="text-sm font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Updates:</span>
                  <span className="text-sm font-medium">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">SLA Status:</span>
                  <Badge variant="outline">On Track</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentWorkspace;