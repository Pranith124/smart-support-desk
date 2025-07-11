import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, User, Clock, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface AssignmentPanelProps {
  currentAssignee?: string;
  currentTeam?: string;
  onAssign?: (assignee: string, team: string) => void;
}

const teams = [
  { id: "frontend", name: "Frontend Team", members: 4 },
  { id: "backend", name: "Backend Team", members: 3 },
  { id: "mobile", name: "Mobile Team", members: 2 },
  { id: "devops", name: "DevOps Team", members: 2 },
  { id: "qa", name: "QA Team", members: 3 }
];

const agents = [
  { id: "sarah", name: "Sarah Johnson", team: "frontend", status: "available", workload: 3 },
  { id: "mike", name: "Mike Chen", team: "backend", status: "busy", workload: 7 },
  { id: "alex", name: "Alex Rodriguez", team: "mobile", status: "available", workload: 2 },
  { id: "emma", name: "Emma Wilson", team: "devops", status: "available", workload: 4 },
  { id: "david", name: "David Kim", team: "qa", status: "busy", workload: 6 }
];

export const AssignmentPanel = ({ 
  currentAssignee, 
  currentTeam, 
  onAssign 
}: AssignmentPanelProps) => {
  const { toast } = useToast();
  const [selectedTeam, setSelectedTeam] = useState(currentTeam || "");
  const [selectedAgent, setSelectedAgent] = useState(currentAssignee || "");

  const availableAgents = agents.filter(agent => 
    !selectedTeam || agent.team === selectedTeam
  );

  const handleAutoAssign = () => {
    // Simple auto-assignment logic: find least busy available agent
    const availableAgentsOnly = agents.filter(agent => agent.status === "available");
    
    if (availableAgentsOnly.length === 0) {
      toast({
        title: "No Available Agents",
        description: "All agents are currently busy. Ticket will be queued.",
        variant: "destructive"
      });
      return;
    }

    const leastBusy = availableAgentsOnly.reduce((min, agent) => 
      agent.workload < min.workload ? agent : min
    );

    setSelectedAgent(leastBusy.id);
    setSelectedTeam(leastBusy.team);

    toast({
      title: "Auto-Assignment Successful",
      description: `Ticket assigned to ${leastBusy.name} from ${teams.find(t => t.id === leastBusy.team)?.name}`,
    });

    onAssign?.(leastBusy.id, leastBusy.team);
  };

  const handleManualAssign = () => {
    if (!selectedAgent || !selectedTeam) {
      toast({
        title: "Assignment Required",
        description: "Please select both team and agent.",
        variant: "destructive"
      });
      return;
    }

    const agent = agents.find(a => a.id === selectedAgent);
    const team = teams.find(t => t.id === selectedTeam);

    toast({
      title: "Manual Assignment Successful",
      description: `Ticket assigned to ${agent?.name} from ${team?.name}`,
    });

    onAssign?.(selectedAgent, selectedTeam);
  };

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Assignment
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Current Assignment Status */}
        {currentAssignee && currentTeam ? (
          <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-success text-success-foreground text-xs">
                  {agents.find(a => a.id === currentAssignee)?.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-sm">
                  {agents.find(a => a.id === currentAssignee)?.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {teams.find(t => t.id === currentTeam)?.name}
                </div>
              </div>
              <Badge variant="outline" className="ml-auto">
                Assigned
              </Badge>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
            <div className="flex items-center gap-2 text-warning">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Unassigned - Awaiting Assignment</span>
            </div>
          </div>
        )}

        {/* Auto Assignment */}
        <div className="space-y-3">
          <Button 
            onClick={handleAutoAssign}
            className="w-full bg-gradient-primary hover:shadow-medium transition-all duration-300"
          >
            <Zap className="h-4 w-4 mr-2" />
            Auto Assign
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Automatically assigns to the least busy available agent
          </p>
        </div>

        {/* Manual Assignment */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Team</label>
            <Select value={selectedTeam} onValueChange={setSelectedTeam}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a team" />
              </SelectTrigger>
              <SelectContent>
                {teams.map((team) => (
                  <SelectItem key={team.id} value={team.id}>
                    <div className="flex items-center justify-between w-full">
                      <span>{team.name}</span>
                      <Badge variant="outline" className="ml-2 text-xs">
                        {team.members} members
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Select Agent</label>
            <Select 
              value={selectedAgent} 
              onValueChange={setSelectedAgent}
              disabled={!selectedTeam}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose an agent" />
              </SelectTrigger>
              <SelectContent>
                {availableAgents.map((agent) => (
                  <SelectItem key={agent.id} value={agent.id}>
                    <div className="flex items-center gap-3 w-full">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">
                          {agent.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{agent.name}</div>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={agent.status === "available" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {agent.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            Workload: {agent.workload}/10
                          </span>
                        </div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={handleManualAssign}
            variant="outline" 
            className="w-full"
            disabled={!selectedAgent || !selectedTeam}
          >
            <User className="h-4 w-4 mr-2" />
            Assign Manually
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};