
import React from "react";
import { Users, User } from "lucide-react";

interface AssignedTeamPanelProps {
  assignedAgent?: string;
  assignedTeam?: string;
  status: "assigned" | "pending";
}

export function AssignedTeamPanel({ assignedAgent, assignedTeam, status }: AssignedTeamPanelProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Assignment Status</h2>
      
      {status === "pending" ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <lock className="w-6 h-6 text-yellow-600" />
          </div>
          <p className="text-gray-600 font-medium">Pending Assignment</p>
          <p className="text-sm text-gray-500 mt-1">This ticket will be assigned to an available agent soon.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {assignedAgent && (
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Assigned Agent</p>
                <p className="text-blue-600">{assignedAgent}</p>
              </div>
            </div>
          )}
          
          {assignedTeam && (
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Assigned Team</p>
                <p className="text-green-600">{assignedTeam}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

