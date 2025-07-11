import { useParams, useNavigate, Link } from "react-router-dom";
import { ResolutionForm, ResolutionData } from "@/components/ResolutionForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle } from "lucide-react";

const ProposeResolution = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock ticket data
  const ticket = {
    id: id || "TKT-001",
    title: "Login page not loading correctly on mobile devices",
    status: "in-progress" as const,
    priority: "high" as const
  };

  const handleResolutionSubmit = (resolution: ResolutionData) => {
    console.log("Resolution submitted:", resolution);
    
    // Simulate API call and redirect
    setTimeout(() => {
      if (resolution.closeTicket) {
        navigate(`/ticket/${id}`);
      } else {
        navigate(`/ticket/${id}/confirm`);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 py-8 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-6">
          <Link 
            to={`/ticket/${id}/work`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Workspace
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle className="h-8 w-8 text-success" />
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Propose Resolution
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Document your solution and propose resolution for ticket #{ticket.id}
          </p>
        </div>

        {/* Ticket Summary */}
        <Card className="shadow-soft mb-8 border-l-4 border-l-primary">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-sm text-muted-foreground">#{ticket.id}</span>
                  <Badge className="bg-status-in-progress text-white">
                    {ticket.status}
                  </Badge>
                  <Badge className="bg-priority-high text-white">
                    {ticket.priority} priority
                  </Badge>
                </div>
                <h2 className="text-xl font-semibold text-foreground">{ticket.title}</h2>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resolution Form */}
        <ResolutionForm onSubmit={handleResolutionSubmit} />
      </div>
    </div>
  );
};

export default ProposeResolution;