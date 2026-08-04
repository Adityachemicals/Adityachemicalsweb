"use client";

import { useState } from "react";

interface ContactFormProps {
  initialProduct: string;
}

export default function ContactForm({ initialProduct }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: initialProduct,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setError("An error occurred while sending your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12 space-y-4">
        <span className="material-symbols-outlined text-primary text-6xl select-none">
          check_circle
        </span>
        <h3 className="text-2xl font-bold text-deep-navy">Thank you for your message!</h3>
        <p className="text-on-surface-variant max-w-md mx-auto">
          Your inquiry has been successfully received. A representative from Aditya Chemicals will reach out to you within 24 business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 px-6 py-2 border border-primary text-primary rounded-full font-button text-xs uppercase cursor-pointer hover:bg-primary/5 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-deep-navy uppercase" htmlFor="name">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="px-4 py-3 rounded-xl border border-surface-container-highest focus:outline-none focus:border-primary text-sm bg-surface-container-lowest"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-deep-navy uppercase" htmlFor="email">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="px-4 py-3 rounded-xl border border-surface-container-highest focus:outline-none focus:border-primary text-sm bg-surface-container-lowest"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-deep-navy uppercase" htmlFor="company">
            Company Name
          </label>
          <input
            id="company"
            type="text"
            placeholder="Company Ltd."
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="px-4 py-3 rounded-xl border border-surface-container-highest focus:outline-none focus:border-primary text-sm bg-surface-container-lowest"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-deep-navy uppercase" htmlFor="phone">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="px-4 py-3 rounded-xl border border-surface-container-highest focus:outline-none focus:border-primary text-sm bg-surface-container-lowest"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-deep-navy uppercase" htmlFor="product">
          Product of Interest
        </label>
        <input
          id="product"
          type="text"
          placeholder="e.g. L-Arginine, Magnesium Bisglycinate"
          value={formData.product}
          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
          className="px-4 py-3 rounded-xl border border-surface-container-highest focus:outline-none focus:border-primary text-sm bg-surface-container-lowest"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-deep-navy uppercase" htmlFor="message">
          Your Inquiry *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Please describe your volume requirements, specifications needed, or sample requests here..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="px-4 py-3 rounded-lg border border-surface-container-highest focus:outline-none focus:border-primary text-sm bg-surface-container-lowest resize-none"
        ></textarea>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-vibrant-azure hover:bg-primary text-white rounded-full font-button text-button uppercase shadow transition-colors cursor-pointer text-center disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="material-symbols-outlined animate-spin">refresh</span>
            Submitting...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </button>
    </form>
  );
}
