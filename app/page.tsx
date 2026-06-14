export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Legal Compliance · Publishers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Revenue Lost to<br />
          <span className="text-[#58a6ff]">Cookie Consent Rejections</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Embed one script. Instantly measure how much ad revenue you lose when visitors reject GDPR cookie consent — and make data-driven decisions to recover it.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No database setup. No complex integrations. Cancel anytime.</p>
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] mb-3 font-mono uppercase tracking-widest">Your embed snippet</p>
          <pre className="text-sm text-[#58a6ff] font-mono overflow-x-auto whitespace-pre-wrap break-all">{`<script src="https://cdn.consenttrack.io/ct.js"
  data-site-id="YOUR_SITE_ID"
  defer>
</script>`}</pre>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">per month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "JavaScript tracking snippet",
              "Accept vs reject revenue dashboard",
              "Daily & monthly revenue reports",
              "Up to 5 sites",
              "Email alerts for revenue drops",
              "GDPR-safe data collection"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the tracking snippet work?</h3>
            <p className="text-[#8b949e] text-sm">You embed a single JavaScript tag on your site. It listens to your existing consent management platform events and records ad revenue data per session — split by consent status — then sends aggregated reports to your dashboard.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is this GDPR compliant itself?</h3>
            <p className="text-[#8b949e] text-sm">Yes. The snippet only collects anonymised, aggregated revenue metrics. No personal data or cookies are set by our script — it observes consent signals and revenue events without identifying individual users.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which ad networks are supported?</h3>
            <p className="text-[#8b949e] text-sm">We support Google Ad Manager, AdSense, Prebid.js, and any network that fires standard revenue events. Custom integrations are available on request.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} ConsentTrack. All rights reserved.
      </footer>
    </main>
  );
}
