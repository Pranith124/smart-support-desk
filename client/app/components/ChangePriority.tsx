
import React, { useState } from "react";
import { AlertCircle, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChangePriorityProps {
  currentPriority: "Low" | "Medium" | "High" | "Urgent";
  onPriorityChange: (priority: string) => void;
}

export function ChangePriority({ currentPriority, onPriorityChange }: ChangePriorityProps) {
  const [selectedPriority, setSelectedPriority] = useState(currentPriority);

  const priorities = [
    { value: "Low", color: "text-green-800 bg-green-100 border-green-200" },
    { value: "Medium", color: "text-yellow-800 bg-yellow-100 border-yellow-200" },
    { value: "High", color: "text-orange-800 bg-orange-100 border-orange-200" },
    { value: "Urgent", color: "text-red-800 bg-red-100 border-red-200" }
  ];

  const handleSave = () => {
    onPriorityChange(selectedPriority);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">Change Priority</h2>
      </div>

      <div className="space-y-3 mb-4">
        {priorities.map((priority) => (
          <label
            key={priority.value}
            className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <input
              type="radio"
              name="priority"
              value={priority.value}
              checked={selectedPriority === priority.value}
              onChange={(e) => setSelectedPriority(e.target.value as any)}
              className="text-blue-600"
            />
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${priority.color}`}>
              {priority.value}
            </span>
          </label>
        ))}
      </div>

      <Button 
        onClick={handleSave}
        disabled={selectedPriority === currentPriority}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        <Save className="w-4 h-4 mr-2" />
        Update Priority
      </Button>
    </div>
  );
}
