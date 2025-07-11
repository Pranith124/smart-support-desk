
import React, { useState } from "react";
import { ArrowUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface EscalateButtonProps {
  onEscalate: () => void;
}

export function EscalateButton({ onEscalate }: EscalateButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [reason, setReason] = useState("");

  const handleEscalate = () => {
    if (reason.trim()) {
      onEscalate();
      setShowModal(false);
      setReason("");
    }
  };

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 border-orange-200 text-orange-700 hover:bg-orange-50"
      >
        <ArrowUp className="w-4 h-4" />
        Escalate
      </Button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Escalate Ticket</h3>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Escalation Reason *
              </label>
              <Textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Please explain why this ticket needs to be escalated..."
                rows={4}
                className="resize-none"
              />
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-orange-700">
                ⚠️ This ticket will be moved to the escalation team and flagged as high priority.
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleEscalate}
                disabled={!reason.trim()}
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Escalate
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
