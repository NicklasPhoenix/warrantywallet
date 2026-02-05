import { WaitlistForm } from "@/components/WaitlistForm";

const features = [
  {
    title: "Track every purchase",
    description:
      "Forward receipts or paste product links. We keep a clean, organized list of what you bought.",
  },
  {
    title: "Instant drop alerts",
    description:
      "Get notified the moment a price drops or a price-match window opens.",
  },
  {
    title: "Return window countdown",
    description:
      "Never miss a refund window again. We surface deadlines before it’s too late.",
  },
  {
    title: "Price-match playbook",
    description:
      "One-tap steps and scripts for common retailers so refunds happen fast.",
  },
  {
    title: "Price history",
    description:
      "See where the price has been and decide if it’s worth claiming.",
  },
  {
    title: "Privacy-first",
    description:
      "No bank access. No card data. You control what’s tracked.",
  },
];

const steps = [
  {
    title: "Add purchases",
    description:
      "Forward a receipt, scan a PDF, or paste a product link. We’ll track it.",
  },
  {
    title: "We monitor prices",
    description:
      "PriceDrop Guard checks for drops and flags price-match windows.",
  },
  {
    title: "Claim the savings",
    description:
      "Get a heads-up with exactly what to do. Save money in minutes.",
  },
];

const useCases = [
  "Stop overpaying after big purchases",
  "Catch drops before return windows expire",
  "Know when it’s worth waiting to buy",
  "Keep proof for price-match claims",
];

const faqs = [
  {
    q: "Do I need to connect my email?",
    a: "No. You can forward receipts or paste links manually. Email connect is optional.",
  },
  {
    q: "Which stores are supported?",
    a: "Any store with a product page link. We’ll prioritize top EU retailers first.",
  },
  {
    q: "What data do you store?",
    a: "Only what you add. No payment details, no card access, no bank connections.",
  },
  {
    q: "How does PriceDrop Guard make money?",
    a: "Simple subscription. We never sell your data.",
  },
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    note: "forever",
    features: ["3 active items", "Basic alerts", "Email forwarding"],
  },
  {
    name: "Plus",
    price: "$4",
    note: "per month",
    features: ["Unlimited items", "Priority alerts", "Price history"],
    highlight: true,
  },
  {
    name: "Family",
    price: "$7",
    note: "per month",
    features: ["Up to 5 people", "Shared tracking", "Bulk import"],
  },
];

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800/60">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-rose-500 text-sm font-bold text-slate-950">
              PD
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
                PriceDrop Guard
              </div>
              <div className="text-xs text-slate-500">Save money after you buy</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="hover:text-white" href="#features">
              Features
            </a>
            <a className="hover:text-white" href="#how-it-works">
              How it works
            </a>
            <a className="hover:text-white" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>
          <a
            className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:text-white"
            href="#waitlist"
          >
            Join waitlist
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_60%)]" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                Price drop alerts
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Never miss a price drop again.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-300">
                PriceDrop Guard tracks your purchases, watches prices, and tells
                you when it’s time to claim a refund or price match.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                  href="#waitlist"
                >
                  Join the waitlist
                </a>
                <a
                  className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-500"
                  href="#features"
                >
                  See how it works
                </a>
              </div>
              <div className="mt-6 text-xs text-slate-500">
                Works with Amazon, MediaMarkt, IKEA, and any store link.
              </div>
            </div>

            <div className="flex-1">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Price drop detected</span>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-300">
                    -€42
                  </span>
                </div>
                <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Sony WH-1000XM5</span>
                    <span className="text-slate-500">2h ago</span>
                  </div>
                  <pre className="mt-3 overflow-hidden text-[11px] text-slate-400">
{`Was: €349
Now: €307
Return window: 9 days left`}
                  </pre>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <div className="text-xs text-slate-500">Store</div>
                    <div className="mt-2 text-sm text-white">MediaMarkt</div>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <div className="text-xs text-slate-500">Action</div>
                    <div className="mt-2 text-sm text-white">Request refund</div>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-4">
                  <div className="text-xs text-slate-500">Claim steps</div>
                  <div className="mt-2 text-sm text-white">
                    1. Open order · 2. Ask for price match · 3. Upload receipt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Features
            </div>
            <h2 className="text-3xl font-semibold text-white">
              Save money after you buy.
            </h2>
            <p className="max-w-2xl text-slate-400">
              PriceDrop Guard is the clean, simple way to track purchases and
              catch price drops without spreadsheets.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              >
                <div className="text-lg font-semibold text-white">
                  {feature.title}
                </div>
                <div className="mt-2 text-sm text-slate-400">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          className="mx-auto w-full max-w-6xl px-6 py-16"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
                How it works
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Add it once. Save when it drops.
              </h2>
              <p className="mt-4 max-w-xl text-slate-400">
                You don’t need to be a bargain hunter. PriceDrop Guard handles the
                monitoring and surfaces the exact moment to act.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {useCases.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
                >
                  <div className="text-xs text-slate-500">Step {index + 1}</div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    {step.title}
                  </div>
                  <div className="mt-2 text-sm text-slate-400">
                    {step.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Pricing
            </div>
            <h2 className="text-3xl font-semibold text-white">
              Pay less. Save more.
            </h2>
            <p className="max-w-2xl text-slate-400">
              Keep it simple with a tiny subscription that pays for itself.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 ${
                  plan.highlight
                    ? "border-amber-300/60 bg-gradient-to-br from-slate-900 to-slate-950"
                    : "border-slate-800 bg-slate-900/50"
                }`}
              >
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  {plan.name}
                </div>
                <div className="mt-4 text-3xl font-semibold text-white">
                  {plan.price}
                  <span className="ml-2 text-sm text-slate-400">{plan.note}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-emerald-300">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                  href="#waitlist"
                >
                  Join waitlist
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
                FAQ
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Common questions
              </h2>
              <p className="mt-4 text-slate-400">
                Tell us your favorite stores and we’ll prioritize them.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
                >
                  <div className="text-base font-semibold text-white">
                    {faq.q}
                  </div>
                  <div className="mt-2 text-sm text-slate-400">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="waitlist"
          className="mx-auto w-full max-w-6xl px-6 pb-20"
        >
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Early access
                </div>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Get the first drops.
                </h2>
                <p className="mt-4 text-slate-400">
                  Join the waitlist for early access pricing, beta invites, and
                  priority support for your favorite stores.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-300">✓</span>
                    Early access to price alerts
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-300">✓</span>
                    Store request priority
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-300">✓</span>
                    Founding member pricing
                  </li>
                </ul>
              </div>
              <WaitlistForm source="footer" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-slate-500 md:flex-row">
          <div>© {new Date().getFullYear()} PriceDrop Guard. All rights reserved.</div>
          <div>Save money after you buy.</div>
        </div>
      </footer>
    </div>
  );
}
