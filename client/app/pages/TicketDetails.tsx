import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TicketHeader } from "@/components/TicketHeader";
import { TicketMetaInfo } from "@/components/TicketMetaInfo";
import { AssignmentPanel } from "@/components/AssignmentPanel";
import { ArrowLeft, MessageSquare, Clock, Edit, CheckCircle } from "lucide-react";

const TicketDetails = () => {
  const { id } = useParams();
  const [assignedAgent, setAssignedAgent] = useState<string>("");
  const [assignedTeam, setAssignedTeam] = useState<string>("");

  // Mock ticket data - in real app, this would come from API
  const ticket = {
    id: id || "TKT-001",
    title: "Login page not loading correctly on mobile devices",
    description: "When I try to access the login page on my iPhone, the form fields are not displaying properly and I cannot enter my credentials. This issue started yesterday after the latest app update. I've tried clearing my browser cache and restarting the app, but the problem persists.",
    status: "open" as const,
    category: "Technical Issue",
    priority: "high" as const,
    contactEmail: "user@example.com",
    contactPhone: "+1 (555) 123-4567",
    createdAt: "2 hours ago",
    createdBy: "John Doe",
    lastUpdated: "1 hour ago",
    attachments: ["screenshot-login-error.png", "device-info.txt"]
  };

  const handleAssignment = (agent: string, team: string) => {
    setAssignedAgent(agent);
    setAssignedTeam(team);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 py-8 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Navigation */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>

        {/* Ticket Header */}
        <div className="mb-8">
          <TicketHeader
            ticketId={ticket.id}
            title={ticket.title}
            status={ticket.status}
            createdAt={ticket.createdAt}
            createdBy={ticket.createdBy}
            lastUpdated={ticket.lastUpdated}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Description
                </h3>
                <p className="text-foreground leading-relaxed">
                  {ticket.description}
                </p>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Timeline
                </h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <div className="w-0.5 h-8 bg-border"></div>
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Ticket Created</p>
                        <span className="text-sm text-muted-foreground">{ticket.createdAt}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Ticket submitted by {ticket.createdBy}
                      </p>
                    </div>
                  </div>

                  {assignedAgent && (
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-success rounded-full"></div>
                        <div className="w-0.5 h-8 bg-border"></div>
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Ticket Assigned</p>
                          <span className="text-sm text-muted-foreground">Just now</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Assigned to agent from {assignedTeam} team
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <div className="w-3 h-3 bg-muted rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium text-muted-foreground">Awaiting Response</p>
                      <p className="text-sm text-muted-foreground">
                        Agent will respond shortly
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button className="bg-gradient-primary hover:shadow-medium transition-all duration-300">
                <MessageSquare className="h-4 w-4 mr-2" />
                Add Comment
              </Button>
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit Ticket
              </Button>
              <Button variant="outline" className="border-success text-success hover:bg-success hover:text-success-foreground">
                <CheckCircle className="h-4 w-4 mr-2" />
                Mark as Resolved
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ticket Meta Information */}
            <TicketMetaInfo
              category={ticket.category}
              priority={ticket.priority}
              contactEmail={ticket.contactEmail}
              contactPhone={ticket.contactPhone}
              attachments={ticket.attachments}
            />

            {/* Assignment Panel */}
            <AssignmentPanel
              currentAssignee={assignedAgent}
              currentTeam={assignedTeam}
              onAssign={handleAssignment}
            />

            {/* SLA Information */}
            <Card className="shadow-soft">
              <CardContent className="p-4">
                <h4 className="font-medium mb-3">SLA Status</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Response Time:</span>
                    <Badge variant="outline">6h remaining</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Resolution Time:</span>
                    <Badge variant="outline">22h remaining</Badge>
                  </div>
                </div>
                <div className="mt-3 bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full w-1/4"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;