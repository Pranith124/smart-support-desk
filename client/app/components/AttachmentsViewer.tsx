
import React from "react";
import { Paperclip, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AttachmentsViewerProps {
  attachments: string[];
}

export function AttachmentsViewer({ attachments }: AttachmentsViewerProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Paperclip className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">Attachments</h2>
      </div>

      <div className="space-y-3">
        {attachments.map((file, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Paperclip className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{file}</p>
              <p className="text-sm text-gray-500">Click to view or download</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Eye className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {attachments.length === 0 && (
        <div className="text-center py-8">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Paperclip className="w-6 h-6 text-gray-400" />
          </div>
          <p className="text-gray-500">No attachments</p>
        </div>
      )}
    </div>
  );
}
