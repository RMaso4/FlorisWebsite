// src/app/components/NewsletterViewer.tsx
"use client";

import { useState } from "react";

export default function NewsletterViewer() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDownload = () => {
    setIsLoading(true);
    try {
      window.open("/latest-newsletter.pdf", "_blank");
    } catch (error) {
      console.error("Error downloading newsletter:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="aspect-[1/1.4] relative bg-gray-50 rounded-lg overflow-hidden">
        <embed
          src="/latest-newsletter.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
          className="absolute inset-0"
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={handleDownload}
          disabled={isLoading}
          className={`text-blue-600 hover:text-blue-800 font-medium ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Bezig met downloaden..." : "Download PDF"}
        </button>
        <span className="text-gray-500 text-sm">Laatste update: 1 februari 2024</span>
      </div>
    </div>
  );
}