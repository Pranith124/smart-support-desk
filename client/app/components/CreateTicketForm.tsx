import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export interface TicketFormData {
  title: string;
  description: string;
  category: string;
  priority: string;
  contactEmail: string;
  contactPhone?: string;
}

interface CreateTicketFormProps {
  onSubmit?: (data: TicketFormData) => void;
}

export const CreateTicketForm = ({ onSubmit }: CreateTicketFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<TicketFormData>({
    title: "",
    description: "",
    category: "",
    priority: "",
    contactEmail: "",
    contactPhone: "",
  });

  const categories = [
    "Technical Issue",
    "Bug Report", 
    "Feature Request",
    "Account Issue",
    "Billing",
    "General Inquiry"
  ];

  const priorities = [
    { value: "low", label: "Low", color: "priority-low" },
    { value: "medium", label: "Medium", color: "priority-medium" },
    { value: "high", label: "High", color: "priority-high" },
    { value: "critical", label: "Critical", color: "priority-critical" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.category || !formData.priority || !formData.contactEmail) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Ticket Created Successfully!",
      description: "Your support ticket has been submitted and assigned ID #TKT-001.",
    });

    onSubmit?.(formData);
  };

  const handleInputChange = (field: keyof TicketFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-soft">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Create Support Ticket
        </CardTitle>
        <CardDescription>
          Submit a new support request. We'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Ticket Title *</Label>
            <Input
              id="title"
              placeholder="Brief description of your issue"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className="transition-all duration-300 focus:shadow-soft"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select onValueChange={(value) => handleInputChange("category", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority *</Label>
              <Select onValueChange={(value) => handleInputChange("priority", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority level" />
                </SelectTrigger>
                <SelectContent>
                  {priorities.map((priority) => (
                    <SelectItem key={priority.value} value={priority.value}>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-${priority.color}`} />
                        {priority.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              placeholder="Please provide detailed information about your issue..."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="min-h-[120px] transition-all duration-300 focus:shadow-soft"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Contact Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.contactEmail}
                onChange={(e) => handleInputChange("contactEmail", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.contactPhone}
                onChange={(e) => handleInputChange("contactPhone", e.target.value)}
              />
            </div>
          </div>

          {formData.priority && (
            <div className="p-4 bg-muted rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs">
                  Priority: {priorities.find(p => p.value === formData.priority)?.label}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {formData.priority === "critical" && "Critical issues are typically resolved within 2 hours."}
                {formData.priority === "high" && "High priority issues are typically resolved within 8 hours."}
                {formData.priority === "medium" && "Medium priority issues are typically resolved within 24 hours."}
                {formData.priority === "low" && "Low priority issues are typically resolved within 3 business days."}
              </p>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-semibold bg-gradient-primary hover:shadow-medium transition-all duration-300"
          >
            Submit Ticket
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};