import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, Clock, Star, Download, Calendar, Target, AlertTriangle } from "lucide-react";

const Analytics = () => {
  // Mock analytics data
  const ticketsByDate = [
    { date: "Mon", created: 12, resolved: 8 },
    { date: "Tue", created: 15, resolved: 11 },
    { date: "Wed", created: 8, resolved: 14 },
    { date: "Thu", created: 18, resolved: 13 },
    { date: "Fri", created: 22, resolved: 16 },
    { date: "Sat", created: 6, resolved: 9 },
    { date: "Sun", created: 4, resolved: 7 }
  ];

  const resolutionTimes = [
    { time: "< 1h", count: 23 },
    { time: "1-4h", count: 45 },
    { time: "4-8h", count: 32 },
    { time: "8-24h", count: 18 },
    { time: "> 24h", count: 8 }
  ];

  const categoriesData = [
    { name: "Technical Issue", value: 45, color: "#3b82f6" },
    { name: "Bug Report", value: 30, color: "#ef4444" },
    { name: "Feature Request", value: 15, color: "#10b981" },
    { name: "Account Issue", value: 8, color: "#f59e0b" },
    { name: "Billing", value: 2, color: "#8b5cf6" }
  ];

  const agentPerformance = [
    { name: "Sarah Johnson", tickets: 24, avgTime: "2.3h", rating: 4.8, slaCompliance: 95 },
    { name: "Mike Chen", tickets: 19, avgTime: "3.1h", rating: 4.6, slaCompliance: 92 },
    { name: "Alex Rodriguez", tickets: 16, avgTime: "2.8h", rating: 4.7, slaCompliance: 94 },
    { name: "Emma Wilson", tickets: 21, avgTime: "2.5h", rating: 4.9, slaCompliance: 98 },
    { name: "David Kim", tickets: 18, avgTime: "3.4h", rating: 4.5, slaCompliance: 89 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 py-8 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Analytics & Reports
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Track performance, analyze trends, and optimize support operations
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Select defaultValue="7days">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24hours">Last 24 Hours</SelectItem>
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="90days">Last 90 Days</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">126</p>
                  <p className="text-sm text-muted-foreground">Total Tickets</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-success" />
                    <span className="text-xs text-success">+12% vs last week</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-success/10 rounded-lg">
                  <Target className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">94%</p>
                  <p className="text-sm text-muted-foreground">Resolution Rate</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-success" />
                    <span className="text-xs text-success">+3% vs last week</span>
                  </div>
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
                  <p className="text-2xl font-bold">2.8h</p>
                  <p className="text-sm text-muted-foreground">Avg Resolution Time</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-destructive rotate-180" />
                    <span className="text-xs text-destructive">+0.2h vs last week</span>
                  </div>
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
                  <p className="text-2xl font-bold">4.7</p>
                  <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-success" />
                    <span className="text-xs text-success">+0.1 vs last week</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Tickets by Date */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Tickets by Date
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ticketsByDate}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="created" fill="#3b82f6" name="Created" />
                  <Bar dataKey="resolved" fill="#10b981" name="Resolved" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Resolution Times */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Resolution Time Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={resolutionTimes} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="time" />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Categories Pie Chart */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Tickets by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={categoriesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoriesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-4">
                {categoriesData.map((category, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                      <span>{category.name}</span>
                    </div>
                    <span className="font-medium">{category.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* SLA Compliance */}
          <Card className="shadow-soft lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                SLA Compliance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-success" />
                      <span className="font-medium">Response Time</span>
                    </div>
                    <p className="text-2xl font-bold text-success">96%</p>
                    <p className="text-sm text-muted-foreground">Target: 95%</p>
                  </div>
                  
                  <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-warning" />
                      <span className="font-medium">Resolution Time</span>
                    </div>
                    <p className="text-2xl font-bold text-warning">89%</p>
                    <p className="text-sm text-muted-foreground">Target: 90%</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall SLA Compliance</span>
                    <span className="font-medium">92.5%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full" style={{ width: "92.5%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Agent Performance */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Agent Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">Agent</th>
                    <th className="text-left py-3">Tickets Resolved</th>
                    <th className="text-left py-3">Avg Resolution Time</th>
                    <th className="text-left py-3">Customer Rating</th>
                    <th className="text-left py-3">SLA Compliance</th>
                  </tr>
                </thead>
                <tbody>
                  {agentPerformance.map((agent, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="py-4 font-medium">{agent.name}</td>
                      <td className="py-4">{agent.tickets}</td>
                      <td className="py-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          {agent.avgTime}
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-warning fill-warning" />
                          <span>{agent.rating}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <Badge 
                          variant={agent.slaCompliance >= 95 ? "default" : agent.slaCompliance >= 90 ? "secondary" : "destructive"}
                          className={agent.slaCompliance >= 95 ? "bg-success text-success-foreground" : ""}
                        >
                          {agent.slaCompliance}%
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;