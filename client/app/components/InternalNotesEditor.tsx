import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Send, Clock, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface InternalNote {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  isPrivate: boolean;
}

export const InternalNotesEditor = () => {
  const { toast } = useToast();
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState<InternalNote[]>([
    {
      id: "1",
      author: "Sarah Johnson",
      content: "Checked the mobile app version. The issue seems to be related to the recent CSS changes in the login form. The input fields are overlapping on smaller screens.",
      timestamp: "30 minutes ago",
      isPrivate: true
    },
    {
      id: "2", 
      author: "Mike Chen",
      content: "I've reproduced the issue on iOS Safari. The problem is in the responsive breakpoints. Working on a fix now.",
      timestamp: "15 minutes ago",
      isPrivate: true
    }
  ]);

  const handleAddNote = () => {
    if (!newNote.trim()) {
      toast({
        title: "Note Required",
        description: "Please enter a note before submitting.",
        variant: "destructive"
      });
      return;
    }

    const note: InternalNote = {
      id: Date.now().toString(),
      author: "Current User",
      content: newNote,
      timestamp: "Just now",
      isPrivate: true
    };

    setNotes(prev => [note, ...prev]);
    setNewNote("");

    toast({
      title: "Note Added",
      description: "Internal note has been added to the ticket.",
    });
  };

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          Internal Notes
          <Badge variant="outline" className="ml-auto text-xs">
            <Lock className="h-3 w-3 mr-1" />
            Private
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Add New Note */}
        <div className="space-y-3">
          <Textarea
            placeholder="Add internal note for team members..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            className="min-h-[100px] resize-none"
          />
          <Button 
            onClick={handleAddNote}
            className="bg-gradient-primary hover:shadow-medium transition-all duration-300"
          >
            <Send className="h-4 w-4 mr-2" />
            Add Note
          </Button>
        </div>

        {/* Notes List */}
        <div className="space-y-4">
          <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
            Previous Notes ({notes.length})
          </h4>
          
          {notes.length > 0 ? (
            <div className="space-y-4">
              {notes.map((note) => (
                <div 
                  key={note.id}
                  className="border border-border rounded-lg p-4 bg-gradient-to-r from-card to-muted/30 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8 flex-shrink-0">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        {note.author.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-sm">{note.author}</span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span className="text-xs">{note.timestamp}</span>
                        </div>
                        {note.isPrivate && (
                          <Badge variant="outline" className="text-xs">
                            <Lock className="h-2 w-2 mr-1" />
                            Private
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-sm text-foreground leading-relaxed">
                        {note.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No internal notes yet</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};