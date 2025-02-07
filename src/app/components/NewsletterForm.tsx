// src/app/components/NewsletterForm.tsx
"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "algemeen",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Here you would typically make an API call to your backend
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Aanmelding mislukt");

      setStatus("success");
      setFormData({ name: "", email: "", type: "algemeen" });
    } catch (error) {
      setStatus("error");
      console.error("Newsletter signup error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Naam
        </label>
        <input 
          type="text"
          id="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          E-mailadres
        </label>
        <input 
          type="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Type nieuwsbrief
        </label>
        <select
          id="type"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option value="algemeen">Algemene nieuwsbrief</option>
          <option value="agro">Agro-nieuwsbrief</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full button-primary ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {status === "loading" ? "Bezig met aanmelden..." : "Aanmelden"}
        </button>
      </div>

      {status === "success" && (
        <div className="p-4 bg-green-50 text-green-800 rounded-md">
          Bedankt voor uw aanmelding! U ontvangt binnenkort een bevestiging per e-mail.
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-50 text-red-800 rounded-md">
          Er is helaas iets misgegaan. Probeer het later opnieuw of neem contact met ons op.
        </div>
      )}
    </form>
  );
}
