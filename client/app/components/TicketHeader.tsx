import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, Hash } from "lucide-react";

export interface TicketHeaderProps {
  ticketId: string;
  title: string;
  status: "open" | "in-progress" | "pending" | "resolved" | "closed";
  createdAt: string;
  createdBy: string;
  lastUpdated?: string;
}

const statusConfig = {
  open: { label: "Open", className: "bg-status-open text-white" },
  "in-progress": { label: "In Progress", className: "bg-status-in-progress text-white" },
  pending: { label: "Pending", className: "bg-status-pending text-white" },
  resolved: { label: "Resolved", className: "bg-status-resolved text-white" },
  closed: { label: "Closed", className: "bg-status-closed text-white" }
};

export const TicketHeader = ({ 
  ticketId, 
  title, 
  status, 
  createdAt, 
  createdBy, 
  lastUpdated 
}: TicketHeaderProps) => {
  return (
    <Card className="shadow-soft border-l-4 border-l-primary">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Hash className="h-4 w-4" />
                <span className="font-mono text-sm font-medium">{ticketId}</span>
              </div>
              <Badge 
                className={`${statusConfig[status].className} font-medium px-3 py-1`}
                variant="secondary"
              >
                {statusConfig[status].label}
              </Badge>
            </div>
            
            <h1 className="text-2xl font-bold text-foreground leading-tight">
              {title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Created by {createdBy}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Created {createdAt}</span>
              </div>
              {lastUpdated && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Updated {lastUpdated}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};