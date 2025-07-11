import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Tag, AlertTriangle, Paperclip } from "lucide-react";

export interface TicketMetaInfoProps {
  category: string;
  priority: "low" | "medium" | "high" | "critical";
  contactEmail: string;
  contactPhone?: string;
  attachments?: string[];
}

const priorityConfig = {
  low: { label: "Low", className: "bg-priority-low text-white", icon: "●" },
  medium: { label: "Medium", className: "bg-priority-medium text-white", icon: "●●" },
  high: { label: "High", className: "bg-priority-high text-white", icon: "●●●" },
  critical: { label: "Critical", className: "bg-priority-critical text-white animate-pulse", icon: "⚡" }
};

export const TicketMetaInfo = ({ 
  category, 
  priority, 
  contactEmail, 
  contactPhone, 
  attachments = [] 
}: TicketMetaInfoProps) => {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Tag className="h-5 w-5 text-primary" />
          Ticket Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category and Priority */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Category</label>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-medium">
                {category}
              </Badge>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Priority</label>
            <div className="flex items-center gap-2">
              <Badge 
                className={`${priorityConfig[priority].className} font-medium px-3 py-1`}
                variant="secondary"
              >
                <AlertTriangle className="h-3 w-3 mr-1" />
                {priorityConfig[priority].label}
              </Badge>
            </div>
          </div>
        </div>

        <Separator />

        {/* Contact Information */}
        <div className="space-y-4">
          <h4 className="font-medium text-foreground">Contact Information</h4>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <Mail className="h-4 w-4 text-primary flex-shrink-0" />
              <div>
                <div className="text-sm font-medium">Email</div>
                <div className="text-sm text-muted-foreground">{contactEmail}</div>
              </div>
            </div>
            
            {contactPhone && (
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Phone</div>
                  <div className="text-sm text-muted-foreground">{contactPhone}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Attachments */}
        {attachments.length > 0 && (
          <>
            <Separator />
            <div className="space-y-3">
              <h4 className="font-medium text-foreground flex items-center gap-2">
                <Paperclip className="h-4 w-4" />
                Attachments ({attachments.length})
              </h4>
              <div className="space-y-2">
                {attachments.map((attachment, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-2 bg-muted/30 rounded border hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <Paperclip className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm text-foreground truncate">{attachment}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};