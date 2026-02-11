export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center justify-between gap-6">
          <div className="text-sm font-semibold tracking-tight">
            MoneyForRobots
          </div>
          <div className="text-sm text-slate-600">
            Non-custodial SDK for agent payments
          </div>
        </div>

        <div className="mt-14 grid gap-10">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Accept stablecoins in AI agents — in 5 lines of code.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
              MoneyForRobots is a lightweight, non-custodial SDK that lets AI agents send and receive USDC
              with Stripe-level simplicity. No custody. No accounts. Just code.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quickstart"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                See Quickstart
              </a>
              <a
                href="https://github.com/"
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                GitHub (soon)
              </a>
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
              <div className="font-semibold text-slate-900">Non-custodial by default</div>
              <div className="mt-1">
                MoneyForRobots never holds funds, never controls private keys, and never intermediates transactions.
                All payments happen directly onchain between user-controlled wallets.
              </div>
            </div>
          </div>

          <div id="quickstart" className="rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold tracking-tight">Quickstart</h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                USDC on Base (v0)
              </span>
            </div>

            <p className="mt-3 max-w-2xl text-slate-700">
              Generate an address, create an invoice, and wait for payment.
            </p>

            <pre className="mt-5 overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm text-slate-100">
{`import { MoneyForRobots } from "moneyforrobots";

const agent = MoneyForRobots.agent({
  chain: "base",
  stablecoin: "USDC",
  privateKey: process.env.AGENT_KEY,
  rpcUrl: process.env.RPC_URL,
});

const invoice = agent.createInvoice({
  amount: "1.00",
  memo: "API call"
});

await agent.waitForPayment(invoice.reference);

console.log("Payment received 🎉");`}
            </pre>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="text-sm font-semibold">Tiny API</div>
                <div className="mt-1 text-sm text-slate-700">
                  address · balance · createInvoice · waitForPayment · send
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="text-sm font-semibold">No accounts</div>
                <div className="mt-1 text-sm text-slate-700">
                  Install the SDK and run it wherever your agent runs.
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="text-sm font-semibold">Built for agents</div>
                <div className="mt-1 text-sm text-slate-700">
                  Opinionated defaults. Stablecoin-first. Production-friendly.
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold tracking-tight">Join the early list</h2>
            <p className="mt-3 max-w-2xl text-slate-700">
              If you’re building an agent that needs to earn or pay money, I’d love to talk.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
                href="mailto:cryptobullylawyer@gmail.com?subject=MoneyForRobots%20early%20access"
              >
                Email me
              </a>
              <div className="rounded-xl border border-slate-200 px-5 py-3 text-sm text-slate-700">
                cryptobullylawyer@gmail.com
              </div>
            </div>
          </div>

          <footer className="pt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} MoneyForRobots. Software only. No custody.
          </footer>
        </div>
      </div>
    </main>
  );
}