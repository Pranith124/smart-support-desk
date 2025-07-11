import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, Clock, AlertTriangle, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ResolutionFormProps {
  onSubmit?: (resolution: ResolutionData) => void;
}

export interface ResolutionData {
  solution: string;
  resolutionType: string;
  timeSpent: string;
  preventiveMeasures: string;
  customerNotification: boolean;
  closeTicket: boolean;
}

const resolutionTypes = [
  "Bug Fix",
  "Configuration Change", 
  "User Education",
  "Feature Request",
  "Hardware Issue",
  "Third-party Issue",
  "Cannot Reproduce",
  "By Design"
];

const timeSpentOptions = [
  "< 30 minutes",
  "30 minutes - 1 hour", 
  "1 - 2 hours",
  "2 - 4 hours",
  "4 - 8 hours",
  "> 8 hours"
];

export const ResolutionForm = ({ onSubmit }: ResolutionFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ResolutionData>({
    solution: "",
    resolutionType: "",
    timeSpent: "",
    preventiveMeasures: "",
    customerNotification: true,
    closeTicket: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.solution || !formData.resolutionType || !formData.timeSpent) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Resolution Proposed",
      description: formData.closeTicket 
        ? "Ticket has been marked as resolved and closed."
        : "Resolution proposed. Awaiting customer confirmation.",
    });

    onSubmit?.(formData);
  };

  const handleInputChange = (field: keyof ResolutionData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-success" />
          Propose Resolution
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Solution Description *</label>
            <Textarea
              placeholder="Describe the solution and steps taken to resolve the issue..."
              value={formData.solution}
              onChange={(e) => handleInputChange("solution", e.target.value)}
              className="min-h-[120px] transition-all duration-300 focus:shadow-soft"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Resolution Type *</label>
              <Select onValueChange={(value) => handleInputChange("resolutionType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select resolution type" />
                </SelectTrigger>
                <SelectContent>
                  {resolutionTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Time Spent *</label>
              <Select onValueChange={(value) => handleInputChange("timeSpent", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time spent" />
                </SelectTrigger>
                <SelectContent>
                  {timeSpentOptions.map((time) => (
                    <SelectItem key={time} value={time}>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {time}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Preventive Measures</label>
            <Textarea
              placeholder="What can be done to prevent this issue in the future? (Optional)"
              value={formData.preventiveMeasures}
              onChange={(e) => handleInputChange("preventiveMeasures", e.target.value)}
              className="min-h-[80px]"
            />
          </div>

          {/* Options */}
          <div className="space-y-4 p-4 bg-muted/50 rounded-lg border">
            <h4 className="font-medium text-sm">Resolution Options</h4>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="notification"
                  checked={formData.customerNotification}
                  onCheckedChange={(checked) => 
                    handleInputChange("customerNotification", checked as boolean)
                  }
                />
                <label htmlFor="notification" className="text-sm font-medium cursor-pointer">
                  Send notification to customer
                </label>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  id="close"
                  checked={formData.closeTicket}
                  onCheckedChange={(checked) => 
                    handleInputChange("closeTicket", checked as boolean)
                  }
                />
                <label htmlFor="close" className="text-sm font-medium cursor-pointer">
                  Close ticket immediately (skip confirmation)
                </label>
              </div>
            </div>
          </div>

          {/* Status Preview */}
          <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="font-medium text-sm">Resolution Status</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">New Status:</span>
              <Badge className="bg-success text-success-foreground">
                {formData.closeTicket ? "Closed" : "Pending Confirmation"}
              </Badge>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              type="submit"
              className="flex-1 bg-gradient-primary hover:shadow-medium transition-all duration-300"
            >
              <FileText className="h-4 w-4 mr-2" />
              Propose Resolution
            </Button>
            
            <Button type="button" variant="outline" className="px-8">
              Save Draft
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};