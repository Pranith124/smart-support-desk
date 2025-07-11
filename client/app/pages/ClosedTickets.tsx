import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Archive, Search, Filter, Star, Clock, Eye, Calendar } from "lucide-react";

interface ClosedTicket {
  id: string;
  title: string;
  category: string;
  priority: "low" | "medium" | "high" | "critical";
  resolution: string;
  resolutionTime: string;
  customerRating: number;
  closedBy: string;
  closedAt: string;
  slaStatus: "met" | "breached";
}

const ClosedTickets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterPriority, setFilterPriority] = useState("");

  // Mock closed tickets data
  const closedTickets: ClosedTicket[] = [
    {
      id: "TKT-001",
      title: "Login page not loading correctly on mobile devices",
      category: "Technical Issue",
      priority: "high",
      resolution: "Bug Fix",
      resolutionTime: "3h 45m",
      customerRating: 5,
      closedBy: "Sarah Johnson",
      closedAt: "2 days ago",
      slaStatus: "met"
    },
    {
      id: "TKT-002", 
      title: "Unable to reset password",
      category: "Account Issue",
      priority: "medium",
      resolution: "User Education",
      resolutionTime: "1h 20m",
      customerRating: 4,
      closedBy: "Mike Chen",
      closedAt: "3 days ago",
      slaStatus: "met"
    },
    {
      id: "TKT-003",
      title: "Payment not processing",
      category: "Billing",
      priority: "critical",
      resolution: "Third-party Issue",
      resolutionTime: "6h 15m",
      customerRating: 3,
      closedBy: "Alex Rodriguez",
      closedAt: "1 week ago",
      slaStatus: "breached"
    },
    {
      id: "TKT-004",
      title: "Feature request: Dark mode",
      category: "Feature Request",
      priority: "low",
      resolution: "Feature Request",
      resolutionTime: "2 weeks",
      customerRating: 5,
      closedBy: "Emma Wilson",
      closedAt: "2 weeks ago",
      slaStatus: "met"
    }
  ];

  const filteredTickets = closedTickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filterCategory || ticket.category === filterCategory;
    const matchesPriority = !filterPriority || ticket.priority === filterPriority;
    
    return matchesSearch && matchesCategory && matchesPriority;
  });

  const categories = [...new Set(closedTickets.map(t => t.category))];
  const priorities = ["low", "medium", "high", "critical"];

  const priorityConfig = {
    low: { className: "bg-priority-low text-white" },
    medium: { className: "bg-priority-medium text-white" },
    high: { className: "bg-priority-high text-white" },
    critical: { className: "bg-priority-critical text-white" }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? "text-warning fill-warning" : "text-muted-foreground"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 py-8 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Archive className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Closed Tickets Archive
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            View and analyze resolved support tickets and performance metrics
          </p>
        </div>

        {/* Filters */}
        <Card className="shadow-soft mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tickets..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Priority</label>
                <Select value={filterPriority} onValueChange={setFilterPriority}>
                  <SelectTrigger>
                    <SelectValue placeholder="All priorities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All priorities</SelectItem>
                    {priorities.map((priority) => (
                      <SelectItem key={priority} value={priority}>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-priority-${priority}`} />
                          {priority.charAt(0).toUpperCase() + priority.slice(1)}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Export</label>
                <Button variant="outline" className="w-full">
                  <Filter className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-success/10 rounded-lg">
                  <Archive className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{closedTickets.length}</p>
                  <p className="text-sm text-muted-foreground">Total Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-warning/10 rounded-lg">
                  <Star className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4.3</p>
                  <p className="text-sm text-muted-foreground">Avg Rating</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">2.5h</p>
                  <p className="text-sm text-muted-foreground">Avg Resolution</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-success/10 rounded-lg">
                  <Calendar className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">95%</p>
                  <p className="text-sm text-muted-foreground">SLA Met</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tickets Table */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Closed Tickets ({filteredTickets.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Resolution</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>SLA</TableHead>
                    <TableHead>Closed By</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTickets.map((ticket) => (
                    <TableRow key={ticket.id} className="hover:bg-muted/50">
                      <TableCell>
                        <div>
                          <div className="font-medium">{ticket.id}</div>
                          <div className="text-sm text-muted-foreground truncate max-w-xs">
                            {ticket.title}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{ticket.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={priorityConfig[ticket.priority].className}>
                          {ticket.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>{ticket.resolution}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm">{ticket.resolutionTime}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {renderStars(ticket.customerRating)}
                          <span className="text-sm text-muted-foreground">
                            ({ticket.customerRating})
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={ticket.slaStatus === "met" ? "default" : "destructive"}
                          className={ticket.slaStatus === "met" ? "bg-success text-success-foreground" : ""}
                        >
                          {ticket.slaStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="text-sm font-medium">{ticket.closedBy}</div>
                          <div className="text-xs text-muted-foreground">{ticket.closedAt}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Link to={`/ticket/${ticket.id}`}>
                          <Button variant="outline" size="sm">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredTickets.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Archive className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No closed tickets found matching your criteria</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClosedTickets;