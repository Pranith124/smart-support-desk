import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, Clock, TrendingUp, Ticket, Search, Settings } from "lucide-react";

const Index = () => {
  // Mock data for dashboard
  const stats = {
    totalTickets: 126,
    openTickets: 23,
    inProgress: 8,
    pendingConfirmation: 4,
    avgResolutionTime: "2.8h",
    satisfactionRating: 4.7
  };

  const recentTickets = [
    { id: "TKT-001", title: "Login page not loading correctly", status: "in-progress", priority: "high", assignee: "Sarah Johnson" },
    { id: "TKT-002", title: "Password reset not working", status: "open", priority: "medium", assignee: "Unassigned" },
    { id: "TKT-003", title: "Payment processing issue", status: "pending", priority: "critical", assignee: "Mike Chen" },
    { id: "TKT-004", title: "Feature request: Dark mode", status: "open", priority: "low", assignee: "Unassigned" }
  ];

  const statusConfig = {
    open: { label: "Open", className: "bg-status-open text-white" },
    "in-progress": { label: "In Progress", className: "bg-status-in-progress text-white" },
    pending: { label: "Pending", className: "bg-status-pending text-white" },
    resolved: { label: "Resolved", className: "bg-status-resolved text-white" }
  };

  const priorityConfig = {
    low: { className: "bg-priority-low text-white" },
    medium: { className: "bg-priority-medium text-white" },
    high: { className: "bg-priority-high text-white" },
    critical: { className: "bg-priority-critical text-white" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Ticket className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Support Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">Manage and track support tickets</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Link to="/create-ticket">
                <Button className="bg-gradient-primary hover:shadow-medium transition-all duration-300">
                  <Plus className="h-4 w-4 mr-2" />
                  New Ticket
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Ticket className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.totalTickets}</p>
                  <p className="text-sm text-muted-foreground">Total Tickets</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-status-open/10 rounded-lg">
                  <Users className="h-6 w-6 text-status-open" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.openTickets}</p>
                  <p className="text-sm text-muted-foreground">Open</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-status-in-progress/10 rounded-lg">
                  <Clock className="h-6 w-6 text-status-in-progress" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.inProgress}</p>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-status-pending/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-status-pending" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.pendingConfirmation}</p>
                  <p className="text-sm text-muted-foreground">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-warning/10 rounded-lg">
                  <Clock className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.avgResolutionTime}</p>
                  <p className="text-sm text-muted-foreground">Avg Resolution</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-warning/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.satisfactionRating}</p>
                  <p className="text-sm text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Tickets */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center justify-between">
                  Recent Tickets
                  <Link to="/tickets/closed">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTickets.map((ticket) => (
                    <Link 
                      key={ticket.id} 
                      to={`/ticket/${ticket.id}`}
                      className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm text-muted-foreground">{ticket.id}</span>
                          <Badge className={statusConfig[ticket.status as keyof typeof statusConfig]?.className}>
                            {statusConfig[ticket.status as keyof typeof statusConfig]?.label}
                          </Badge>
                          <Badge className={priorityConfig[ticket.priority as keyof typeof priorityConfig]?.className}>
                            {ticket.priority}
                          </Badge>
                        </div>
                      </div>
                      <h4 className="font-medium mb-1">{ticket.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        Assigned to: {ticket.assignee}
                      </p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/create-ticket">
                  <Button className="w-full bg-gradient-primary hover:shadow-medium transition-all duration-300">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Ticket
                  </Button>
                </Link>
                <Link to="/analytics">
                  <Button variant="outline" className="w-full">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                </Link>
                <Link to="/tickets/closed">
                  <Button variant="outline" className="w-full">
                    <Ticket className="h-4 w-4 mr-2" />
                    Closed Tickets
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">All Systems</span>
                  <Badge className="bg-success text-success-foreground">Operational</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Response Time</span>
                  <Badge variant="outline">&lt; 1 min</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Queue Status</span>
                  <Badge variant="outline">Normal</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
