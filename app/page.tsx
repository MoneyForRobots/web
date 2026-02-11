// app/page.tsx
import Link from "next/link";

const CodeBlock = ({ children }: { children: string }) => (
  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm">
    {/* extra right padding + stable container so it doesn’t feel glued to the edge on iOS */}
    <pre className="overflow-x-auto px-5 py-5 pr-8 text-sm leading-relaxed text-zinc-900">
      <code>{children}</code>
    </pre>
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
    {children}
  </span>
);

export default function Page() {
  const snippet = `import { Agent } from "moneyforrobots";

const agent = new Agent({
  privateKey: process.env.AGENT_PRIVATE_KEY,
  network: "base",
});

const invoice = await agent.createInvoice({
  amount: "25",
  currency: "USDC",
  memo: "Agent task payment",
});

await agent.sendPayment({
  to: invoice.address,
  amount: "25",
  currency: "USDC",
});`;

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl border border-zinc-200 bg-white font-mono text-sm">
              M
            </div>
            <span className="text-sm font-semibold tracking-tight">MoneyForRobots</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
            <a href="#how" className="hover:text-zinc-900">
              How it works
            </a>
            <a href="#quickstart" className="hover:text-zinc-900">
              Quickstart
            </a>
            <a href="#roadmap" className="hover:text-zinc-900">
              Roadmap
            </a>
            <a href="#faq" className="hover:text-zinc-900">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/MoneyForRobots/web"
              className="hidden rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50 md:inline-flex"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>

            {/* normalize button height on iOS */}
            <a
              href="#quickstart"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-zinc-900 px-4 text-sm font-semibold leading-none text-white hover:bg-zinc-800"
            >
              Get started
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        {/* pt-14 -> pt-16 */}
        <section className="mx-auto max-w-6xl px-5 pt-16 md:pt-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Pill>Base-first</Pill>
                <Pill>Stablecoins</Pill>
                <Pill>Non-custodial</Pill>
                <Pill>Agent-native</Pill>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Payment rails for AI agents.
                <span className="block text-zinc-500">No onboarding. No KYC. Just code.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-zinc-700 md:text-lg">
                MoneyForRobots is a lightweight SDK for self-custodial stablecoin payments. Create invoices, receive
                funds, and send USDC from agents in minutes.
              </p>

              {/* CTA buttons (mobile polish + iOS height normalization) */}
              <div className="mt-2 flex flex-col space-y-2 sm:mt-0 sm:flex-row sm:items-center sm:space-x-3 sm:space-y-0">
                <a
                  href="#quickstart"
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold leading-none text-white hover:bg-zinc-800 sm:w-auto"
                >
                  Get started
                </a>
                <Link
                  href="https://github.com/MoneyForRobots/web"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-zinc-200 px-5 py-3 text-sm font-semibold leading-none text-zinc-900 hover:bg-zinc-50 sm:w-auto"
                >
                  View GitHub
                </Link>
              </div>

              <p className="text-xs leading-relaxed text-zinc-500">
                Not a bank. Not custody. Not a fiat on-ramp. This is programmable stablecoin plumbing for agents.
              </p>
            </div>

            {/* min-w-0 prevents overflow and “hugging” the right edge */}
            <div className="min-w-0 space-y-4">
              {/* add mt-8 only on mobile */}
              <div className="mt-8 flex items-center justify-between md:mt-0">
                <div className="text-sm font-semibold">Example</div>
                <div className="text-xs text-zinc-500">TypeScript SDK</div>
              </div>

              <CodeBlock>{snippet}</CodeBlock>

              <div className="grid grid-cols-2 gap-3 text-xs text-zinc-600">
                <div className="rounded-2xl border border-zinc-200 p-4">
                  <div className="font-semibold text-zinc-900">Create invoices</div>
                  <div className="mt-1">Generate a payment request an agent can share or embed.</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 p-4">
                  <div className="font-semibold text-zinc-900">Send USDC</div>
                  <div className="mt-1">Simple transfers on Base with clean abstractions.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-6xl px-5 pt-14 md:pt-20">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 p-6">
              <div className="text-xs font-medium text-zinc-500">Step 1</div>
              <h2 className="mt-2 text-lg font-semibold">Bring your own key</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                Your agent controls a wallet. MoneyForRobots never holds funds and never creates accounts.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Self-custody</Pill>
                <Pill>No accounts</Pill>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-6">
              <div className="text-xs font-medium text-zinc-500">Step 2</div>
              <h2 className="mt-2 text-lg font-semibold">Request payment</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                Create an invoice object with amount, token, memo, and a recipient address.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Invoices</Pill>
                <Pill>USDC</Pill>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-6">
              <div className="text-xs font-medium text-zinc-500">Step 3</div>
              <h2 className="mt-2 text-lg font-semibold">Move stablecoins</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                Send and receive stablecoins onchain with a tiny, agent-friendly API surface.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Base</Pill>
                <Pill>Fast + cheap</Pill>
              </div>
            </div>
          </div>
        </section>

        {/* Quickstart */}
        <section id="quickstart" className="mx-auto max-w-6xl px-5 pt-14 md:pt-20">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-7 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Quickstart</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-700 md:text-base">
                  Start with Base + USDC. This is the smallest possible surface area that’s still useful: initialize an
                  agent, create an invoice, send a payment.
                </p>

                <div className="mt-6 space-y-3 text-sm text-zinc-700">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full border border-zinc-300 bg-white" />
                    <div>
                      <div className="font-semibold text-zinc-900">Install</div>
                      <div className="mt-1 font-mono text-xs text-zinc-700">npm i moneyforrobots</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full border border-zinc-300 bg-white" />
                    <div>
                      <div className="font-semibold text-zinc-900">Set env vars</div>
                      <div className="mt-1 font-mono text-xs text-zinc-700">AGENT_PRIVATE_KEY=...</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full border border-zinc-300 bg-white" />
                    <div>
                      <div className="font-semibold text-zinc-900">Run the example</div>
                      <div className="mt-1 font-mono text-xs text-zinc-700">node examples/pay.js</div>
                    </div>
                  </div>
                </div>

                {/* Quickstart CTAs (py-2.5 -> py-3) */}
                <div className="mt-8 flex flex-col space-y-2 sm:flex-row sm:space-x-3 sm:space-y-0">
                  <Link
                    href="https://github.com/MoneyForRobots/web"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 sm:w-auto"
                  >
                    Clone repo
                  </Link>
                  <a
                    href="#roadmap"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 sm:w-auto"
                  >
                    See roadmap
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold">Install + pay</div>
                <CodeBlock>{`npm i moneyforrobots

# .env
AGENT_PRIVATE_KEY=...

# run
node examples/pay.js`}</CodeBlock>
                <p className="text-xs leading-relaxed text-zinc-500">
                  The SDK will be open-source and composable. Start simple, then add receipts, confirmations, and
                  listeners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="mx-auto max-w-6xl px-5 pt-14 md:pt-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Roadmap</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-700 md:text-base">
                Ship the primitives first. Then add reliability layers without turning into a bank.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">v0</div>
                <Pill>now</Pill>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>• Base + USDC support</li>
                <li>• Agent init + balances</li>
                <li>• createInvoice()</li>
                <li>• sendPayment()</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">v1</div>
                <Pill>next</Pill>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>• Payment confirmations</li>
                <li>• Receipt objects + metadata</li>
                <li>• Webhook-friendly event streams</li>
                <li>• Multiple tokens</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">v2</div>
                <Pill>later</Pill>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>• Multi-chain</li>
                <li>• Policy hooks (optional)</li>
                <li>• Agent-to-agent micropayments</li>
                <li>• Pluggable identity (optional)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pb-24 md:pt-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 md:text-base">
                Keep it simple. Keep it non-custodial. Keep it developer-first.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-zinc-200 p-6">
                <div className="text-sm font-semibold">Is this custodial?</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                  No. Your agent controls the private key. MoneyForRobots is an SDK that helps you move stablecoins
                  programmatically.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 p-6">
                <div className="text-sm font-semibold">Do users need accounts or KYC?</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                  No onboarding. No KYC. Just code. You’re operating onchain with self-custody.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 p-6">
                <div className="text-sm font-semibold">What does “invoice” mean here?</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                  A structured payment request: amount, token, memo, and a recipient address—plus optional helpers for
                  shareable links/QR data.
                </p>
              </div>
            </div>
          </div>

          <footer className="mt-14 border-t border-zinc-200 pt-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-zinc-600">© {new Date().getFullYear()} MoneyForRobots</div>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <Link
                  href="https://github.com/MoneyForRobots/web"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-700 hover:text-zinc-900"
                >
                  GitHub
                </Link>
                <a href="#quickstart" className="text-zinc-700 hover:text-zinc-900">
                  Docs
                </a>
                <a href="#how" className="text-zinc-700 hover:text-zinc-900">
                  How it works
                </a>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}