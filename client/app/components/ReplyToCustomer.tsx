
import React, { useState } from "react";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ReplyToCustomerProps {
  onSend: (message: string) => void;
}

export function ReplyToCustomer({ onSend }: ReplyToCustomerProps) {
  const [message, setMessage] = useState("");
  const [conversation] = useState([
    {
      id: "1",
      sender: "Customer",
      content: "I'm unable to access my dashboard. It shows a white screen after login.",
      timestamp: "3 hours ago"
    },
    {
      id: "2",
      sender: "Agent",
      content: "Hi John, thank you for reaching out. I'll help you resolve this issue. Can you please tell me which browser you're using?",
      timestamp: "2 hours ago"
    },
    {
      id: "3",
      sender: "Customer", 
      content: "I'm using Chrome version 120. I also tried Firefox but same issue.",
      timestamp: "2 hours ago"
    }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Mail className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">Customer Communication</h2>
      </div>

      <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
        {conversation.map((msg) => (
          <div
            key={msg.id}
            className={`p-4 rounded-lg ${
              msg.sender === "Customer" 
                ? "bg-blue-50 border-l-4 border-blue-500" 
                : "bg-green-50 border-l-4 border-green-500"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className={`font-medium ${
                msg.sender === "Customer" ? "text-blue-900" : "text-green-900"
              }`}>
                {msg.sender}
              </span>
              <span className="text-sm text-gray-500">{msg.timestamp}</span>
            </div>
            <p className="text-gray-900">{msg.content}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your response to the customer..."
          rows={4}
          className="resize-none"
        />
        <div className="flex gap-3">
          <Button 
            onClick={handleSend}
            disabled={!message.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Reply
          </Button>
          <Button variant="outline">
            Save Draft
          </Button>
        </div>
      </div>
    </div>
  );
}
