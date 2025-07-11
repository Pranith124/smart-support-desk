
import React from "react";
import { FileText, ExternalLink } from "lucide-react";

interface Article {
  id: string;
  title: string;
  url: string;
}

interface LinkedArticlesProps {
  articles: Article[];
}

export function LinkedArticles({ articles }: LinkedArticlesProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">Helpful Articles</h2>
      </div>

      <div className="space-y-3">
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <FileText className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{article.title}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-700">
          💡 These articles might help resolve similar issues
        </p>
      </div>
    </div>
  );
}
