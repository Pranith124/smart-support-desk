
import React, { useState } from "react";
import { Users, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReassignButtonProps {
  onReassign: (agent: string) => void;
}

export function ReassignButton({ onReassign }: ReassignButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState("");

  const agents = [
    "Sarah Johnson",
    "Mike Chen", 
    "Emily Davis",
    "John Smith",
    "Lisa Wilson"
  ];

  const handleReassign = () => {
    if (selectedAgent) {
      onReassign(selectedAgent);
      setShowModal(false);
      setSelectedAgent("");
    }
  };

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2"
      >
        <Users className="w-4 h-4" />
        Reassign
      </Button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reassign Ticket</h3>
            
            <div className="mb-4">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                <User className="w-4 h-4 mr-2 text-blue-600" />
                Select Agent
              </label>
              <select
                value={selectedAgent}
                onChange={(e) => setSelectedAgent(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none text-gray-900"
              >
                <option value="">Choose an agent...</option>
                {agents.map((agent) => (
                  <option key={agent} value={agent}>{agent}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleReassign}
                disabled={!selectedAgent}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Reassign
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowModal(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
