import { WaitlistForm } from "@/components/WaitlistForm";

const highlights = [
  {
    title: "Price drop alerts",
    description:
      "We watch your purchases and ping you the moment a refund window opens.",
  },
  {
    title: "Return window guard",
    description:
      "Countdowns make sure you never miss a return or price-match deadline.",
  },
  {
    title: "Simple claim steps",
    description:
      "Clear steps and scripts for popular retailers so you get money back fast.",
  },
];

const features = [
  {
    title: "Add purchases in seconds",
    description:
      "Forward a receipt, scan a PDF, or paste a product link. That’s it.",
  },
  {
    title: "Auto price tracking",
    description:
      "We monitor price history across your favorite stores in the background.",
  },
  {
    title: "Save without spreadsheets",
    description:
      "Clean dashboards show what’s worth claiming right now.",
  },
  {
    title: "Private by design",
    description:
      "No bank login. No card access. You decide what we track.",
  },
  {
    title: "Store request queue",
    description:
      "Tell us where you shop and we’ll prioritize those retailers.",
  },
  {
    title: "Family-ready",
    description:
      "Share price drop tracking across the household on the Family plan.",
  },
];

const steps = [
  {
    title: "Add your purchase",
    description:
      "Drop in a receipt or link. We save the item and price instantly.",
  },
  {
    title: "We watch the price",
    description:
      "PriceDrop Guard checks for drops and price-match windows daily.",
  },
  {
    title: "Claim the savings",
    description:
      "We send a ping with exact steps so the refund happens fast.",
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

export default function Home() {
  return (
    <div className="bg-[#f7fbf8] text-slate-900">
      <header className="border-b border-emerald-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-lime-300 text-sm font-bold text-emerald-900">
              PD
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">
                PriceDrop Guard
              </div>
              <div className="text-xs text-slate-500">Save money after you buy</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#features">
              Features
            </a>
            <a className="hover:text-slate-900" href="#how-it-works">
              How it works
            </a>
            <a className="hover:text-slate-900" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-slate-900" href="#faq">
              FAQ
            </a>
          </nav>
          <a
            className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
            href="#waitlist"
          >
            Join waitlist
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),_transparent_60%)]" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Price drop alerts
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Stop overpaying after you buy.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-600">
                PriceDrop Guard tracks your purchases, watches prices, and tells
                you when to claim a refund or price match.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
                  href="#waitlist"
                >
                  Join the waitlist
                </a>
                <a
                  className="rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300"
                  href="#how-it-works"
                >
                  See how it works
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
                <span>Average savings: €120 / year</span>
                <span>Works with EU retailers</span>
              </div>
            </div>

            <div className="flex-1">
              <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Price drop detected</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-700">
                    -€42
                  </span>
                </div>
                <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">
                      Sony WH-1000XM5
                    </span>
                    <span>2h ago</span>
                  </div>
                  <pre className="mt-3 overflow-hidden text-[11px] text-slate-500">
{`Was: €349
Now: €307
Return window: 9 days left`}
                  </pre>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-100 bg-white p-4">
                    <div className="text-xs text-slate-500">Store</div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">
                      MediaMarkt
                    </div>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-white p-4">
                    <div className="text-xs text-slate-500">Action</div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">
                      Request refund
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-lime-50 p-4">
                  <div className="text-xs text-slate-500">Claim steps</div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">
                    1. Open order · 2. Ask for price match · 3. Upload receipt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-10">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
              >
                <div className="text-lg font-semibold text-slate-900">
                  {item.title}
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.3em] text-emerald-600">
              Features
            </div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Designed for everyday shopping.
            </h2>
            <p className="max-w-2xl text-slate-600">
              Clean, playful, and built to save you money without the hassle.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-emerald-100 bg-white p-6"
              >
                <div className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </div>
                <div className="mt-2 text-sm text-slate-600">
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
              <div className="text-xs uppercase tracking-[0.3em] text-emerald-600">
                How it works
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Add it once. Save when it drops.
              </h2>
              <p className="mt-4 max-w-xl text-slate-600">
                You don’t need to be a bargain hunter. PriceDrop Guard handles the
                monitoring and surfaces the exact moment to act.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    ✓
                  </span>
                  Stop overpaying after big purchases
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    ✓
                  </span>
                  Catch drops before return windows expire
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    ✓
                  </span>
                  Know when it’s worth waiting to buy
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-emerald-100 bg-white p-6"
                >
                  <div className="text-xs text-emerald-600">Step {index + 1}</div>
                  <div className="mt-2 text-lg font-semibold text-slate-900">
                    {step.title}
                  </div>
                  <div className="mt-2 text-sm text-slate-600">
                    {step.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.3em] text-emerald-600">
              Pricing
            </div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Simple plans that pay for themselves.
            </h2>
            <p className="max-w-2xl text-slate-600">
              One price drop covers a month of Plus. That’s the goal.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 ${
                  plan.highlight
                    ? "border-emerald-400/60 bg-white shadow-lg"
                    : "border-emerald-100 bg-white"
                }`}
              >
                <div className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  {plan.name}
                </div>
                <div className="mt-4 text-3xl font-semibold text-slate-900">
                  {plan.price}
                  <span className="ml-2 text-sm text-slate-500">{plan.note}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-emerald-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
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
              <div className="text-xs uppercase tracking-[0.3em] text-emerald-600">
                FAQ
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Common questions
              </h2>
              <p className="mt-4 text-slate-600">
                Tell us your favorite stores and we’ll prioritize them.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-emerald-100 bg-white p-6"
                >
                  <div className="text-base font-semibold text-slate-900">
                    {faq.q}
                  </div>
                  <div className="mt-2 text-sm text-slate-600">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="waitlist"
          className="mx-auto w-full max-w-6xl px-6 pb-20"
        >
          <div className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-lg">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-emerald-600">
                  Early access
                </div>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                  Get the first drops.
                </h2>
                <p className="mt-4 text-slate-600">
                  Join the waitlist for early access pricing, beta invites, and
                  priority support for your favorite stores.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-600">✓</span>
                    Early access to price alerts
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-600">✓</span>
                    Store request priority
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-600">✓</span>
                    Founding member pricing
                  </li>
                </ul>
              </div>
              <WaitlistForm source="footer" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-100 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-slate-500 md:flex-row">
          <div>
            © {new Date().getFullYear()} PriceDrop Guard. All rights reserved.
          </div>
          <div>Save money after you buy.</div>
        </div>
      </footer>
    </div>
  );
}
