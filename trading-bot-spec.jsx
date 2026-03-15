import { useState } from "react";

const sections = [
  "Overview",
  "Core Features",
  "Bot Intelligence",
  "Customization",
  "UX & Education",
  "Architecture",
  "Security",
  "Pricing",
  "Compliance",
];

const data = {
  Overview: {
    icon: "◈",
    tagline: "Where algorithmic precision meets retail accessibility.",
    body: `AlphaBot is an AI-first retail trading platform that automates portfolio management for both novice investors and seasoned traders. Inspired by the clean UX of Robinhood and the institutional-grade reliability of Coinbase Pro, AlphaBot's core differentiation is a continuously learning autonomous trading engine — not just alerts and signals, but real, executed trades with full user visibility.

The platform bridges the gap between passive investing and active algorithmic trading. A first-time investor can onboard in minutes, set a risk profile, and let the bot run. An experienced quant can build and backtest custom multi-indicator strategies with precision controls.`,
    cards: [
      { label: "Primary Users", value: "Retail investors, passive earners, algo-curious traders" },
      { label: "Core Value", value: "Automated alpha generation with full transparency" },
      { label: "Market Position", value: "Between Robinhood (UX) and QuantConnect (power)" },
      { label: "Revenue Model", value: "Tiered SaaS + performance fee hybrid" },
    ],
  },
  "Core Features": {
    icon: "⬡",
    tagline: "Everything needed to trade without lifting a finger.",
    features: [
      {
        category: "Automated Trading Engine",
        items: [
          "Real-time autonomous trade entry and exit based on AI signals",
          "Multi-asset support: US equities, ETFs, crypto, options (tiered access)",
          "Fractional share support for low-capital users",
          "Smart order routing to minimize slippage and fees",
          "Pre-market and after-hours trading capability",
          "Market-hours scheduling with timezone awareness",
        ],
      },
      {
        category: "Market Data & Analysis",
        items: [
          "Level 1 & Level 2 quotes via Polygon.io / Alpaca Market Data",
          "Technical indicator library: RSI, MACD, Bollinger Bands, VWAP, EMA/SMA",
          "Sentiment analysis engine parsing earnings calls, SEC filings, Reddit, Twitter/X",
          "Macroeconomic data feeds: Fed rate decisions, CPI, jobs reports",
          "Earnings calendar integration with pre-event positioning logic",
          "Options flow and dark pool activity signals (Premium tier)",
        ],
      },
      {
        category: "Portfolio Management",
        items: [
          "Real-time P&L dashboard with unrealized/realized split",
          "Position sizing engine with Kelly Criterion or fixed-percentage allocation",
          "Automated portfolio rebalancing on schedule or drift threshold",
          "Tax-loss harvesting module (US users)",
          "Correlation matrix to avoid over-concentration",
          "Multi-account support (taxable, IRA, paper trading)",
        ],
      },
    ],
  },
  "Bot Intelligence": {
    icon: "⟁",
    tagline: "The engine under the hood.",
    layers: [
      {
        name: "Signal Generation Layer",
        color: "#00d4aa",
        description: "Raw market data is processed through technical, fundamental, and alternative data pipelines to produce tradeable signals with confidence scores.",
        components: ["Technical Analysis Engine (TA-Lib + custom models)", "NLP Sentiment Scorer (FinBERT fine-tuned)", "Earnings Surprise Predictor (XGBoost)", "Macro Regime Classifier"],
      },
      {
        name: "Strategy Execution Layer",
        color: "#3b82f6",
        description: "Signals are filtered through user-defined strategy rules, risk constraints, and portfolio limits before order generation.",
        components: ["Rule Engine (user-configured logic trees)", "Risk Budget Manager", "Position Sizing Calculator", "Drawdown Circuit Breaker"],
      },
      {
        name: "Order Management Layer",
        color: "#a855f7",
        description: "Approved orders are routed through broker APIs with intelligent execution to minimize market impact.",
        components: ["TWAP/VWAP Execution Algorithms", "Smart Order Router", "Fill Monitoring & Slippage Tracker", "Partial Fill Handler"],
      },
      {
        name: "Learning & Adaptation Layer",
        color: "#f59e0b",
        description: "Post-trade analysis feeds back into model retraining pipelines to continuously improve signal quality.",
        components: ["Trade Attribution Engine", "Reinforcement Learning Fine-tuner (nightly batch)", "A/B Strategy Performance Evaluator", "Anomaly Detector (market regime shifts)"],
      },
    ],
    models: [
      { name: "Price Prediction", type: "Temporal Fusion Transformer", input: "OHLCV + volume profile" },
      { name: "Sentiment Scoring", type: "FinBERT (fine-tuned)", input: "News headlines, 8-K filings, social media" },
      { name: "Regime Detection", type: "Hidden Markov Model", input: "VIX, yield curve, sector rotation data" },
      { name: "Entry/Exit Timing", type: "PPO Reinforcement Learning", input: "Order book depth, time-of-day, volatility" },
    ],
  },
  Customization: {
    icon: "⊞",
    tagline: "From beginner presets to institutional-grade rule builders.",
    tiers: [
      {
        name: "Preset Strategies",
        audience: "Novice users",
        options: [
          { name: "Conservative Growth", desc: "Blue-chip ETFs, low turnover, dividend focus, max 10% drawdown tolerance" },
          { name: "Balanced Momentum", desc: "Large-cap US equities, weekly rebalance, trend-following signals" },
          { name: "Aggressive Growth", desc: "Mid/small cap, sector rotation, higher frequency, 25% drawdown tolerance" },
          { name: "Crypto Opportunist", desc: "BTC/ETH/top 20 alts, 24/7 operation, mean-reversion focus" },
          { name: "Dividend Harvester", desc: "Dividend capture strategy, income-focused, low volatility" },
        ],
      },
      {
        name: "Parameter Customization",
        audience: "Intermediate users",
        options: [
          { name: "Risk Tolerance Slider", desc: "1–10 scale mapping to position sizing, stop-loss width, and leverage caps" },
          { name: "Asset Universe Filter", desc: "Sector, market cap, ESG rating, exchange-listed filters" },
          { name: "Stop-Loss Config", desc: "Fixed %, ATR-based trailing, or AI-dynamic stop placement" },
          { name: "Trade Frequency Cap", desc: "Max trades per day/week; quiet hours blackout windows" },
          { name: "News Sensitivity", desc: "React to earnings, ignore macro, or full-spectrum event handling" },
        ],
      },
      {
        name: "Custom Strategy Builder",
        audience: "Advanced / Pro users",
        options: [
          { name: "Visual Logic Editor", desc: "Drag-and-drop IF/THEN rule builder with 80+ technical indicators" },
          { name: "Code Editor (Python)", desc: "Write strategies in Python with full backtesting API access" },
          { name: "Multi-Condition Entry", desc: "Combine signals: e.g., RSI < 30 AND MACD crossover AND volume spike" },
          { name: "Backtesting Engine", desc: "Run strategies on 10+ years of historical data with slippage/commission modeling" },
          { name: "Walk-Forward Testing", desc: "Out-of-sample validation to prevent overfitting" },
        ],
      },
    ],
  },
  "UX & Education": {
    icon: "◎",
    tagline: "Designed to build confident, informed traders.",
    screens: [
      {
        name: "Dashboard",
        desc: "Single-view command center showing portfolio value, today's P&L, active bot status, and top movers.",
        features: ["Live sparkline charts per position", "Bot confidence meter (0–100)", "One-tap pause/resume bot", "Daily digest card with key market events"],
      },
      {
        name: "Trade Feed",
        desc: "Real-time log of every trade the bot executes, with AI reasoning shown in plain English.",
        features: ["'Why did the bot do this?' explainer per trade", "Entry/exit price overlaid on chart", "Sentiment source citations", "Share trade to community feed"],
      },
      {
        name: "Learning Hub",
        desc: "Embedded education system that grows with the user.",
        features: ["Interactive glossary (250+ terms)", "Strategy School video series", "Daily market brief (2-min read)", "Scenario simulator: 'What would happen if...'"],
      },
      {
        name: "Paper Trading Mode",
        desc: "Full-featured simulation environment with $100K virtual capital.",
        features: ["Identical bot behavior to live account", "Performance vs S&P 500 benchmark", "Leaderboard (opt-in, anonymous)", "Graduate to live with one tap"],
      },
      {
        name: "Analytics Center",
        desc: "Deep-dive performance attribution and risk reporting.",
        features: ["Sharpe, Sortino, Max Drawdown stats", "Win rate by strategy, sector, time-of-day", "Trade journal with tagging", "Monthly performance PDF export"],
      },
    ],
  },
  Architecture: {
    icon: "⬢",
    tagline: "Cloud-native, event-driven, built for scale.",
    stack: {
      Frontend: [
        { name: "React Native", role: "iOS & Android apps" },
        { name: "Next.js 14", role: "Web platform (App Router)" },
        { name: "TailwindCSS + shadcn/ui", role: "Design system" },
        { name: "TradingView Charting Library", role: "Professional-grade charts" },
        { name: "React Query + Zustand", role: "State & cache management" },
      ],
      Backend: [
        { name: "FastAPI (Python)", role: "Core API & ML model serving" },
        { name: "Node.js (Express)", role: "Real-time websocket gateway" },
        { name: "PostgreSQL + TimescaleDB", role: "User data & time-series market data" },
        { name: "Redis", role: "Session cache, rate limiting, pub/sub" },
        { name: "Apache Kafka", role: "Event streaming for trade signals" },
      ],
      "AI / ML": [
        { name: "PyTorch", role: "Model training & inference" },
        { name: "MLflow", role: "Experiment tracking & model registry" },
        { name: "Ray Serve", role: "Distributed model serving" },
        { name: "Airflow", role: "ML pipeline orchestration" },
        { name: "Feast", role: "Feature store" },
      ],
      Infrastructure: [
        { name: "AWS EKS (Kubernetes)", role: "Container orchestration" },
        { name: "AWS Lambda", role: "Event-driven trade triggers" },
        { name: "CloudFront + S3", role: "Static assets & CDN" },
        { name: "Terraform", role: "Infrastructure as code" },
        { name: "Datadog", role: "Observability & alerting" },
      ],
      "Broker & Data APIs": [
        { name: "Alpaca Markets API", role: "US equities order execution (commission-free)" },
        { name: "Interactive Brokers API", role: "Pro tier — global markets, options" },
        { name: "Polygon.io", role: "Real-time & historical market data" },
        { name: "Alpha Vantage / Quandl", role: "Fundamental & macro data" },
        { name: "NewsAPI + Benzinga", role: "Financial news ingestion" },
      ],
    },
    flows: [
      { step: "1", label: "Market Data Ingestion", detail: "Kafka consumer ingests tick data from Polygon.io → stored in TimescaleDB, feature vectors computed in real-time" },
      { step: "2", label: "Signal Generation", detail: "ML models score each asset on watchlist every 60s → signals published to Kafka topic with confidence score and reasoning" },
      { step: "3", label: "Strategy Evaluation", detail: "User's rule engine consumes signals → filters against risk budget, position limits, schedule constraints → approved orders queued" },
      { step: "4", label: "Order Execution", detail: "Order service sends to broker API (Alpaca/IBKR) → fill events consumed → portfolio state updated in real-time" },
      { step: "5", label: "Post-Trade Analytics", detail: "Fill data written to trade journal → attribution computed → nightly batch feeds back to model retraining pipeline" },
    ],
  },
  Security: {
    icon: "⬟",
    tagline: "Zero-trust architecture protecting capital and identity.",
    domains: [
      {
        area: "Authentication & Identity",
        measures: [
          "Passkey (WebAuthn) as primary auth — no password required",
          "TOTP/FIDO2 hardware key as second factor for withdrawals",
          "OAuth 2.0 + PKCE for third-party broker connections",
          "Session tokens rotated every 15 minutes with refresh token rotation",
          "Device fingerprinting with anomaly alerts",
        ],
      },
      {
        area: "API & Broker Security",
        measures: [
          "Broker API keys encrypted at rest using AWS KMS (AES-256)",
          "Keys stored in AWS Secrets Manager — never in application code or DB",
          "Broker connection uses OAuth where available (Alpaca OAuth2)",
          "Principle of least privilege: trade-only scopes, no withdrawal permission stored",
          "API key rotation reminders every 90 days",
        ],
      },
      {
        area: "Data Protection",
        measures: [
          "All data encrypted in transit (TLS 1.3) and at rest (AES-256)",
          "PII isolated in separate database with field-level encryption",
          "GDPR & CCPA compliance: right to erasure, data export",
          "SOC 2 Type II audit annually",
          "No selling of user trading data to third parties",
        ],
      },
      {
        area: "Infrastructure Security",
        measures: [
          "VPC with private subnets for all backend services",
          "WAF (AWS Shield) in front of all public endpoints",
          "Automated vulnerability scanning (Snyk, Dependabot)",
          "Penetration testing quarterly by third-party firm",
          "Bug bounty program via HackerOne",
        ],
      },
      {
        area: "Trading Safeguards",
        measures: [
          "Circuit breaker: auto-pause bot if daily loss > user-defined threshold",
          "Velocity limits: max order count per minute to prevent runaway loops",
          "Trade size caps hard-coded at account level",
          "Anomaly detection on order flow to catch malformed instructions",
          "Manual override: one-tap kill switch liquidates all positions",
        ],
      },
    ],
  },
  Pricing: {
    icon: "◇",
    tagline: "Aligned incentives. Transparent pricing. No hidden fees.",
    tiers: [
      {
        name: "Starter",
        price: "Free",
        color: "#94a3b8",
        features: [
          "Paper trading (unlimited)",
          "1 preset bot strategy",
          "Basic portfolio dashboard",
          "Learning Hub access",
          "Up to $5,000 live capital",
          "15% performance fee on profits",
          "Email support",
        ],
        ideal: "First-time investors, curious learners",
        cta: "Get Started",
      },
      {
        name: "Growth",
        price: "$29/mo",
        annualPrice: "$249/yr",
        color: "#3b82f6",
        featured: true,
        features: [
          "Everything in Starter",
          "5 preset strategies + parameter customization",
          "Up to $50,000 live capital",
          "Advanced analytics dashboard",
          "Backtesting (5 years of data)",
          "News & sentiment feeds",
          "10% performance fee on profits",
          "Priority chat support",
        ],
        ideal: "Casual investors building wealth",
        cta: "Start Free Trial",
      },
      {
        name: "Pro",
        price: "$79/mo",
        annualPrice: "$699/yr",
        color: "#00d4aa",
        features: [
          "Everything in Growth",
          "Custom Strategy Builder (visual + Python)",
          "Walk-forward backtesting (10+ years)",
          "Options trading support",
          "Unlimited capital",
          "Tax-loss harvesting",
          "5% performance fee on profits",
          "Multi-account support",
          "Dedicated account manager",
        ],
        ideal: "Active traders and algo enthusiasts",
        cta: "Go Pro",
      },
      {
        name: "Institutional",
        price: "Custom",
        color: "#a855f7",
        features: [
          "Everything in Pro",
          "White-label option",
          "Co-location / low-latency execution",
          "IBKR integration (global markets)",
          "Custom ML model development",
          "0% performance fee (flat license)",
          "SLA-backed uptime guarantee (99.9%)",
          "Dedicated engineering support",
        ],
        ideal: "RIAs, family offices, fintech builders",
        cta: "Contact Sales",
      },
    ],
    notes: [
      "Performance fees are calculated on net profits above high-water mark — you never pay fees on recovering previous losses.",
      "Annual plans include 2 months free vs. monthly billing.",
      "Free 14-day trial on Growth and Pro — no credit card required.",
      "Crypto trading available on all paid tiers at +$10/mo add-on.",
    ],
  },
  Compliance: {
    icon: "⬠",
    tagline: "Built for regulation, not just around it.",
    areas: [
      {
        jurisdiction: "United States",
        regulator: "SEC / FINRA / CFTC",
        requirements: [
          "Register as Investment Adviser (RIA) under Investment Advisers Act of 1940 if providing individualized advice",
          "Pattern Day Trader (PDT) rule enforcement: flag accounts with <$25K making 4+ day trades in 5 days",
          "Reg BI (Best Interest): document that bot decisions serve user's best interest",
          "AML / KYC via third-party (Persona, Jumio) for identity verification",
          "Form ADV disclosure on automated trading risks and fee structure",
          "FINRA Rule 4370: Business Continuity Plan (BCP) for broker-dealers",
        ],
      },
      {
        jurisdiction: "European Union",
        regulator: "ESMA / MiFID II",
        requirements: [
          "MiFID II compliance for algorithmic trading: kill-switch, risk controls, audit trails",
          "GDPR: lawful basis for processing financial data, 72-hour breach notification",
          "DORA (Digital Operational Resilience Act): ICT risk framework by 2025",
          "ESMA product intervention rules for CFDs and leveraged products",
          "Retail client categorization and appropriateness testing",
        ],
      },
      {
        jurisdiction: "Canada",
        regulator: "CSA / IIROC",
        requirements: [
          "Register as Portfolio Manager or Exempt Market Dealer with applicable CSA body",
          "PIPEDA compliance for personal data handling",
          "FINTRAC reporting for suspicious transactions",
          "OSC (Ontario): binary option prohibition compliance",
        ],
      },
      {
        jurisdiction: "All Markets",
        regulator: "Universal",
        requirements: [
          "Risk Disclosure Document presented and acknowledged at onboarding",
          "Clear disclosure that past performance does not guarantee future results",
          "Prominent warnings on leveraged/options trading screens",
          "Data retention: trade logs held for 7 years minimum",
          "Quarterly audit trails exportable for regulatory review",
        ],
      },
    ],
    disclaimer: "AlphaBot is not a licensed broker-dealer and executes trades via registered broker partners (Alpaca, IBKR). Investment advisory registration status varies by jurisdiction. All users should consult a licensed financial advisor before deploying capital.",
  },
};

export default function App() {
  const [active, setActive] = useState("Overview");
  const section = data[active];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080c14",
      color: "#e2e8f0",
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      display: "flex",
    }}>
      {/* Sidebar */}
      <aside style={{
        width: 220,
        background: "#0d1422",
        borderRight: "1px solid #1e2d45",
        padding: "32px 0",
        position: "sticky",
        top: 0,
        height: "100vh",
        overflowY: "auto",
        flexShrink: 0,
      }}>
        <div style={{ padding: "0 20px 28px", borderBottom: "1px solid #1e2d45" }}>
          <div style={{ fontSize: 11, color: "#00d4aa", letterSpacing: 3, marginBottom: 6 }}>ALPHABOT</div>
          <div style={{ fontSize: 10, color: "#475569", letterSpacing: 1 }}>PRODUCT SPEC v1.0</div>
        </div>
        <nav style={{ padding: "16px 0" }}>
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: "100%",
                textAlign: "left",
                padding: "10px 20px",
                background: active === s ? "rgba(0,212,170,0.08)" : "transparent",
                border: "none",
                borderLeft: active === s ? "2px solid #00d4aa" : "2px solid transparent",
                color: active === s ? "#00d4aa" : "#64748b",
                fontSize: 11,
                letterSpacing: 1,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              <span style={{ fontSize: 14 }}>{data[s]?.icon}</span>
              {s.toUpperCase()}
            </button>
          ))}
        </nav>
        <div style={{
          margin: "24px 16px 0",
          padding: "12px",
          background: "rgba(0,212,170,0.04)",
          border: "1px solid rgba(0,212,170,0.15)",
          borderRadius: 6,
          fontSize: 9,
          color: "#475569",
          lineHeight: 1.6,
          letterSpacing: 0.5,
        }}>
          ⚠ This document is a product design specification. Not financial advice.
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, overflowY: "auto", padding: "48px 56px", maxWidth: 900 }}>
        {/* Section Header */}
        <div style={{ marginBottom: 40, borderBottom: "1px solid #1e2d45", paddingBottom: 28 }}>
          <div style={{ fontSize: 36, marginBottom: 8, color: "#00d4aa" }}>{section.icon}</div>
          <h1 style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: -0.5,
            color: "#f1f5f9",
            margin: "0 0 8px",
            fontFamily: "'IBM Plex Mono', monospace",
          }}>{active}</h1>
          <p style={{ color: "#64748b", fontSize: 13, margin: 0, letterSpacing: 0.5 }}>
            {section.tagline}
          </p>
        </div>

        {/* OVERVIEW */}
        {active === "Overview" && (
          <div>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 13, marginBottom: 32 }}>{section.body}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {section.cards.map((c, i) => (
                <div key={i} style={{
                  background: "#0d1422",
                  border: "1px solid #1e2d45",
                  borderRadius: 8,
                  padding: "20px 24px",
                }}>
                  <div style={{ fontSize: 10, color: "#475569", letterSpacing: 2, marginBottom: 8 }}>{c.label.toUpperCase()}</div>
                  <div style={{ color: "#e2e8f0", fontSize: 13, lineHeight: 1.5 }}>{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CORE FEATURES */}
        {active === "Core Features" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {section.features.map((cat, i) => (
              <div key={i}>
                <div style={{
                  fontSize: 11,
                  color: "#00d4aa",
                  letterSpacing: 2,
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}>
                  <div style={{ width: 24, height: 1, background: "#00d4aa" }} />
                  {cat.category.toUpperCase()}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {cat.items.map((item, j) => (
                    <div key={j} style={{
                      background: "#0d1422",
                      border: "1px solid #1e2d45",
                      borderRadius: 6,
                      padding: "12px 16px",
                      fontSize: 12,
                      color: "#94a3b8",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                    }}>
                      <span style={{ color: "#3b82f6", marginTop: 2, flexShrink: 0 }}>▸</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BOT INTELLIGENCE */}
        {active === "Bot Intelligence" && (
          <div>
            <div style={{ marginBottom: 40 }}>
              {section.layers.map((layer, i) => (
                <div key={i} style={{
                  background: "#0d1422",
                  border: "1px solid #1e2d45",
                  borderLeft: `3px solid ${layer.color}`,
                  borderRadius: 8,
                  padding: "20px 24px",
                  marginBottom: 12,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <div style={{ fontSize: 10, letterSpacing: 2, color: layer.color }}>{`0${i + 1} — ${layer.name.toUpperCase()}`}</div>
                  </div>
                  <p style={{ color: "#64748b", fontSize: 12, margin: "0 0 14px", lineHeight: 1.6 }}>{layer.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {layer.components.map((c, j) => (
                      <span key={j} style={{
                        fontSize: 10,
                        color: "#475569",
                        background: "#0a1020",
                        border: "1px solid #1e2d45",
                        borderRadius: 4,
                        padding: "4px 10px",
                        letterSpacing: 0.5,
                      }}>{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, color: "#00d4aa", letterSpacing: 2, marginBottom: 16 }}>ML MODEL REGISTRY</div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr>
                  {["Model Purpose", "Architecture", "Input Features"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "8px 16px", color: "#475569", fontSize: 10, letterSpacing: 1, borderBottom: "1px solid #1e2d45" }}>{h.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.models.map((m, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #0d1422" }}>
                    <td style={{ padding: "12px 16px", color: "#e2e8f0" }}>{m.name}</td>
                    <td style={{ padding: "12px 16px", color: "#3b82f6" }}>{m.type}</td>
                    <td style={{ padding: "12px 16px", color: "#64748b" }}>{m.input}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* CUSTOMIZATION */}
        {active === "Customization" && (
          <div>
            {section.tiers.map((tier, i) => (
              <div key={i} style={{ marginBottom: 36 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 16 }}>
                  <div style={{ fontSize: 11, color: "#00d4aa", letterSpacing: 2 }}>{tier.name.toUpperCase()}</div>
                  <div style={{ fontSize: 10, color: "#475569", letterSpacing: 1 }}>FOR: {tier.audience.toUpperCase()}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {tier.options.map((opt, j) => (
                    <div key={j} style={{
                      background: "#0d1422",
                      border: "1px solid #1e2d45",
                      borderRadius: 6,
                      padding: "14px 18px",
                      display: "flex",
                      gap: 20,
                      alignItems: "flex-start",
                    }}>
                      <div style={{ fontSize: 12, color: "#f1f5f9", minWidth: 180, flexShrink: 0 }}>{opt.name}</div>
                      <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>{opt.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* UX & EDUCATION */}
        {active === "UX & Education" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {section.screens.map((screen, i) => (
              <div key={i} style={{
                background: "#0d1422",
                border: "1px solid #1e2d45",
                borderRadius: 8,
                overflow: "hidden",
              }}>
                <div style={{
                  padding: "16px 24px",
                  background: "#0a1020",
                  borderBottom: "1px solid #1e2d45",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <div style={{ fontSize: 12, color: "#e2e8f0", fontWeight: 600 }}>{screen.name}</div>
                  <div style={{ fontSize: 9, color: "#475569", letterSpacing: 2 }}>SCREEN {String(i + 1).padStart(2, "0")}</div>
                </div>
                <div style={{ padding: "16px 24px" }}>
                  <p style={{ color: "#64748b", fontSize: 12, margin: "0 0 14px", lineHeight: 1.6 }}>{screen.desc}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {screen.features.map((f, j) => (
                      <div key={j} style={{ fontSize: 11, color: "#94a3b8", display: "flex", gap: 8 }}>
                        <span style={{ color: "#00d4aa" }}>✓</span> {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ARCHITECTURE */}
        {active === "Architecture" && (
          <div>
            {/* Tech Stack */}
            <div style={{ fontSize: 11, color: "#00d4aa", letterSpacing: 2, marginBottom: 20 }}>TECHNOLOGY STACK</div>
            {Object.entries(section.stack).map(([layer, techs]) => (
              <div key={layer} style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 10, color: "#475569", letterSpacing: 2, marginBottom: 10 }}>{layer.toUpperCase()}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {techs.map((t, i) => (
                    <div key={i} style={{
                      background: "#0d1422",
                      border: "1px solid #1e2d45",
                      borderRadius: 6,
                      padding: "8px 14px",
                    }}>
                      <div style={{ fontSize: 11, color: "#e2e8f0", marginBottom: 2 }}>{t.name}</div>
                      <div style={{ fontSize: 10, color: "#475569" }}>{t.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Data Flow */}
            <div style={{ fontSize: 11, color: "#00d4aa", letterSpacing: 2, margin: "36px 0 20px" }}>TRADE EXECUTION DATA FLOW</div>
            <div style={{ position: "relative" }}>
              {section.flows.map((flow, i) => (
                <div key={i} style={{ display: "flex", gap: 20, marginBottom: 4, alignItems: "stretch" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{
                      width: 32,
                      height: 32,
                      background: "rgba(0,212,170,0.1)",
                      border: "1px solid #00d4aa",
                      borderRadius: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      color: "#00d4aa",
                      flexShrink: 0,
                    }}>{flow.step}</div>
                    {i < section.flows.length - 1 && (
                      <div style={{ width: 1, flex: 1, background: "#1e2d45", margin: "4px 0" }} />
                    )}
                  </div>
                  <div style={{
                    background: "#0d1422",
                    border: "1px solid #1e2d45",
                    borderRadius: 6,
                    padding: "10px 16px",
                    marginBottom: 8,
                    flex: 1,
                  }}>
                    <div style={{ fontSize: 11, color: "#e2e8f0", marginBottom: 4 }}>{flow.label}</div>
                    <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.5 }}>{flow.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECURITY */}
        {active === "Security" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {section.domains.map((domain, i) => (
              <div key={i} style={{
                background: "#0d1422",
                border: "1px solid #1e2d45",
                borderRadius: 8,
                overflow: "hidden",
              }}>
                <div style={{
                  padding: "12px 20px",
                  background: "rgba(59,130,246,0.06)",
                  borderBottom: "1px solid #1e2d45",
                  fontSize: 11,
                  color: "#3b82f6",
                  letterSpacing: 2,
                }}>🔒 {domain.area.toUpperCase()}</div>
                <div style={{ padding: "16px 20px" }}>
                  {domain.measures.map((m, j) => (
                    <div key={j} style={{
                      fontSize: 12,
                      color: "#94a3b8",
                      padding: "6px 0",
                      borderBottom: j < domain.measures.length - 1 ? "1px solid #0a1020" : "none",
                      display: "flex",
                      gap: 10,
                    }}>
                      <span style={{ color: "#3b82f6", flexShrink: 0 }}>▸</span> {m}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PRICING */}
        {active === "Pricing" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
              {section.tiers.map((tier, i) => (
                <div key={i} style={{
                  background: tier.featured ? "rgba(59,130,246,0.06)" : "#0d1422",
                  border: `1px solid ${tier.featured ? "#3b82f6" : "#1e2d45"}`,
                  borderTop: `3px solid ${tier.color}`,
                  borderRadius: 8,
                  padding: "24px",
                  position: "relative",
                }}>
                  {tier.featured && (
                    <div style={{
                      position: "absolute",
                      top: -1,
                      right: 16,
                      background: "#3b82f6",
                      fontSize: 9,
                      color: "white",
                      padding: "3px 10px",
                      letterSpacing: 2,
                    }}>MOST POPULAR</div>
                  )}
                  <div style={{ fontSize: 11, color: tier.color, letterSpacing: 2, marginBottom: 8 }}>{tier.name.toUpperCase()}</div>
                  <div style={{ fontSize: 24, color: "#f1f5f9", fontWeight: 700, marginBottom: 4 }}>{tier.price}</div>
                  {tier.annualPrice && (
                    <div style={{ fontSize: 11, color: "#475569", marginBottom: 16 }}>{tier.annualPrice} billed annually</div>
                  )}
                  <div style={{ fontSize: 10, color: "#475569", letterSpacing: 1, marginBottom: 14 }}>{tier.ideal.toUpperCase()}</div>
                  <div style={{ marginBottom: 20 }}>
                    {tier.features.map((f, j) => (
                      <div key={j} style={{ fontSize: 11, color: "#94a3b8", padding: "5px 0", display: "flex", gap: 8 }}>
                        <span style={{ color: tier.color }}>✓</span> {f}
                      </div>
                    ))}
                  </div>
                  <div style={{
                    background: tier.color,
                    color: "#080c14",
                    textAlign: "center",
                    padding: "10px",
                    borderRadius: 4,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 1,
                    cursor: "pointer",
                  }}>{tier.cta.toUpperCase()}</div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #1e2d45", paddingTop: 24 }}>
              <div style={{ fontSize: 11, color: "#475569", letterSpacing: 2, marginBottom: 14 }}>PRICING NOTES</div>
              {section.notes.map((note, i) => (
                <div key={i} style={{ fontSize: 12, color: "#64748b", padding: "6px 0", display: "flex", gap: 10, lineHeight: 1.5 }}>
                  <span style={{ color: "#00d4aa", flexShrink: 0 }}>i</span> {note}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COMPLIANCE */}
        {active === "Compliance" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
              {section.areas.map((area, i) => (
                <div key={i} style={{
                  background: "#0d1422",
                  border: "1px solid #1e2d45",
                  borderRadius: 8,
                  overflow: "hidden",
                }}>
                  <div style={{
                    padding: "12px 20px",
                    background: "rgba(168,85,247,0.06)",
                    borderBottom: "1px solid #1e2d45",
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                    <div style={{ fontSize: 11, color: "#a855f7", letterSpacing: 2 }}>{area.jurisdiction.toUpperCase()}</div>
                    <div style={{ fontSize: 10, color: "#475569", letterSpacing: 1 }}>{area.regulator}</div>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    {area.requirements.map((req, j) => (
                      <div key={j} style={{
                        fontSize: 12,
                        color: "#94a3b8",
                        padding: "6px 0",
                        borderBottom: j < area.requirements.length - 1 ? "1px solid #0a1020" : "none",
                        display: "flex",
                        gap: 10,
                        lineHeight: 1.5,
                      }}>
                        <span style={{ color: "#a855f7", flexShrink: 0 }}>▸</span> {req}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              background: "rgba(245,158,11,0.06)",
              border: "1px solid rgba(245,158,11,0.2)",
              borderRadius: 8,
              padding: "16px 20px",
              fontSize: 12,
              color: "#94a3b8",
              lineHeight: 1.7,
            }}>
              <div style={{ fontSize: 10, color: "#f59e0b", letterSpacing: 2, marginBottom: 8 }}>⚠ LEGAL DISCLAIMER</div>
              {section.disclaimer}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
