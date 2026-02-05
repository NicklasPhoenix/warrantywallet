"use client";

import { useState } from "react";

const frequencyOptions = [
  "A few times a year",
  "Monthly",
  "Weekly",
  "Daily",
];

const categoryOptions = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Kids",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({ source = "hero" }: { source?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: String(formData.get("email") || ""),
      company: String(formData.get("stores") || ""),
      volume: String(formData.get("frequency") || ""),
      stack: String(formData.get("category") || ""),
      pain: String(formData.get("pain") || ""),
      source,
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong");
      }

      setStatus("success");
      setMessage("You’re on the list. We’ll reach out soon.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          <span>Email *</span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
            disabled={status === "loading"}
          />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          <span>Favorite stores</span>
          <input
            type="text"
            name="stores"
            placeholder="Amazon, Zara, IKEA"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
            disabled={status === "loading"}
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          <span>Shopping frequency</span>
          <select
            name="frequency"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white focus:border-amber-300 focus:outline-none"
            disabled={status === "loading"}
            defaultValue=""
          >
            <option value="" disabled>
              Select frequency
            </option>
            {frequencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          <span>Top category</span>
          <select
            name="category"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white focus:border-amber-300 focus:outline-none"
            disabled={status === "loading"}
            defaultValue=""
          >
            <option value="" disabled>
              Select category
            </option>
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm text-slate-300">
        <span>Biggest frustration</span>
        <textarea
          name="pain"
          rows={3}
          placeholder="Missing price drops, return windows, price match..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
          disabled={status === "loading"}
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "loading" || status === "success"}
      >
        {status === "loading" ? "Submitting..." : "Join the waitlist"}
      </button>

      {message && (
        <div
          className={`rounded-xl border px-4 py-3 text-sm ${
            status === "success"
              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
              : "border-rose-500/40 bg-rose-500/10 text-rose-200"
          }`}
        >
          {message}
        </div>
      )}

      <p className="text-xs text-slate-500">
        No spam. Early access only. Unsubscribe anytime.
      </p>
    </form>
  );
}
