import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CheckCircle, Star, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ConfirmResolution = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isResolved, setIsResolved] = useState<boolean | null>(null);

  // Mock ticket and resolution data
  const ticket = {
    id: id || "TKT-001",
    title: "Login page not loading correctly on mobile devices",
    status: "pending" as const
  };

  const resolution = {
    solution: "Fixed the CSS responsive breakpoints for mobile devices. The login form now properly scales on smaller screens and all input fields are accessible.",
    resolutionType: "Bug Fix",
    timeSpent: "2 - 4 hours",
    resolvedBy: "Sarah Johnson",
    resolvedAt: "30 minutes ago"
  };

  const handleConfirmResolution = (confirmed: boolean) => {
    setIsResolved(confirmed);
    
    if (confirmed) {
      toast({
        title: "Resolution Confirmed",
        description: "Thank you! The ticket has been marked as resolved.",
      });
    } else {
      toast({
        title: "Resolution Rejected",
        description: "The ticket has been reopened for further investigation.",
        variant: "destructive"
      });
    }

    // Simulate API call and redirect after feedback
    setTimeout(() => {
      navigate(`/ticket/${id}`);
    }, 2000);
  };

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 py-8 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-6">
          <Link 
            to={`/ticket/${id}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Ticket Details
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle className="h-8 w-8 text-success" />
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Confirm Resolution
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Please review the proposed solution and confirm if your issue has been resolved
          </p>
        </div>

        {/* Ticket Summary */}
        <Card className="shadow-soft mb-8 border-l-4 border-l-primary">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-sm text-muted-foreground">#{ticket.id}</span>
                  <Badge className="bg-status-pending text-white">
                    Pending Confirmation
                  </Badge>
                </div>
                <h2 className="text-xl font-semibold text-foreground">{ticket.title}</h2>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resolution Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  Proposed Resolution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Solution</h4>
                  <p className="text-foreground leading-relaxed bg-muted/50 p-4 rounded-lg">
                    {resolution.solution}
                  </p>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Resolution Type</h4>
                    <Badge variant="outline">{resolution.resolutionType}</Badge>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Time Spent</h4>
                    <Badge variant="outline">{resolution.timeSpent}</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-1">Resolved By</h4>
                  <p className="text-sm">{resolution.resolvedBy} • {resolution.resolvedAt}</p>
                </div>
              </CardContent>
            </Card>

            {/* Confirmation Actions */}
            {isResolved === null && (
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Is your issue resolved?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button 
                      onClick={() => handleConfirmResolution(true)}
                      className="flex-1 bg-gradient-accent hover:shadow-medium transition-all duration-300"
                    >
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Yes, Issue Resolved
                    </Button>
                    <Button 
                      onClick={() => handleConfirmResolution(false)}
                      variant="outline" 
                      className="flex-1 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <ThumbsDown className="h-4 w-4 mr-2" />
                      No, Still Having Issues
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Feedback Form */}
            {isResolved !== null && (
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Your Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {isResolved && (
                    <div>
                      <h4 className="font-medium mb-3">Rate our support</h4>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((value) => (
                          <button
                            key={value}
                            onClick={() => handleRatingClick(value)}
                            className={`p-2 rounded-lg transition-colors ${
                              rating >= value 
                                ? "text-warning bg-warning/10" 
                                : "text-muted-foreground hover:text-warning"
                            }`}
                          >
                            <Star className="h-6 w-6" fill={rating >= value ? "currentColor" : "none"} />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-medium mb-3">
                      {isResolved ? "Additional comments" : "What's still not working?"}
                    </h4>
                    <Textarea
                      placeholder={
                        isResolved 
                          ? "How was your experience? Any suggestions for improvement?"
                          : "Please describe what's still not working so we can help you further..."
                      }
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full bg-gradient-primary">
                    Submit Feedback
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status Info */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Current Status:</span>
                  <Badge className="bg-status-pending text-white">
                    Pending Confirmation
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Resolution Time:</span>
                  <span className="text-sm font-medium">{resolution.timeSpent}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Resolved By:</span>
                  <span className="text-sm font-medium">{resolution.resolvedBy}</span>
                </div>
              </CardContent>
            </Card>

            {/* Need Help */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  If you're still experiencing issues or have questions about the resolution, we're here to help.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmResolution;