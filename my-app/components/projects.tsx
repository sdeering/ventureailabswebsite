import { ExternalLink } from "lucide-react"

interface Project {
  name: string
  description: string
  image: string
  href?: string
  linkLabel?: string
}

const projects: Project[] = [
  {
    name: "CryptoDataAPI.com",
    description:
      "Real-time crypto market data infrastructure for AI agents. One API key unlocks 190+ endpoints across a dozen aggregated sources — live prices, derivatives, quant market regimes, whale positioning, liquidation maps, order books, and historical backtesting datasets — with an MCP server so agents can just ask instead of wiring up each endpoint.",
    image: "/img/projects/cryptodataapi.jpg",
    href: "https://cryptodataapi.com",
  },
  {
    name: "StockMarketAPI.ai",
    description:
      "Real-time equities, fundamentals, and options data for trading agents. Quotes, financials, and reports across 8,500+ companies on every major global exchange — NYSE, NASDAQ, LSE, TSE, HKEX, ASX and more — through a single REST API built for automated research and trading workflows.",
    image: "/img/projects/stockmarketapi.jpg",
    href: "https://stockmarketapi.ai",
  },
  {
    name: "EasyEscrow.ai",
    description:
      "A non-custodial stablecoin settlement layer on Solana for institutions. Counterparties lock digital assets in a smart-contract escrow that verifies conditions and releases funds automatically, so trades settle instantly without a trusted intermediary holding money mid-transaction.",
    image: "/img/projects/easyescrow.jpg",
    href: "https://easyescrow.ai/",
  },
  {
    name: "RequestTap.ai",
    description:
      "Turns any API into a x402 USDC pay-per-request service for AI agents. API providers drop in a paywall and get paid per call in stablecoins, instantly — no subscriptions, no API keys, no invoicing, just metered access agents can pay for autonomously.",
    image: "/img/projects/requesttap.jpg",
    href: "https://requesttap.ai",
  },
  {
    name: "Datasales.ai",
    description:
      "An AI training-data marketplace — buy and sell structured datasets like demographics, business registries, market and weather data, and trading signals instantly, with a natural-language API so AI agents can search, purchase, and pay for data programmatically, no registration required.",
    image: "/img/projects/datasales.jpg",
    href: "https://datasales.ai/",
  },
  {
    name: "DigitalDeals.ai",
    description:
      "An agent-to-agent marketplace where AI agents list, bid on, and complete digital-goods trades — datasets, model weights, API access, compute credits — entirely through a REST API, with live deal, wanted, and completed-trade feeds agents can post and query directly.",
    image: "/img/projects/digitaldeals.jpg",
    href: "https://digitaldeals.ai/",
  },
  {
    name: "TrustPass.ai",
    description:
      "An on-chain identity layer for AI agents. Agents register free ERC-8004 digital IDs, build a verifiable reputation through completed pairings and reviews, and prove trustworthiness to other agents, with public leaderboards tracking the network's most active, trusted agents.",
    image: "/img/projects/trustpass.jpg",
    href: "https://trustpass.ai/",
  },
  {
    name: "UrgentTradie.com",
    description:
      "An emergency tradie network connecting Australian homeowners with verified, available plumbers, electricians, locksmiths, and HVAC techs right now — free for customers, with tradies typically responding within 30–90 minutes.",
    image: "/img/projects/urgenttradie.jpg",
    href: "https://urgenttradie.com/",
  },
  {
    name: "StacksTasker.com",
    description:
      "An AI-agent task marketplace built on Bitcoin via the Stacks blockchain. Humans or agents post tasks with an STX bounty, AI agents bid and complete the work, and payment settles instantly on-chain through the x402 protocol — a fully agentic gig economy with no invoicing or manual payouts.",
    image: "/img/projects/stackstasker.jpg",
    href: "https://stackstasker.com/",
  },
  {
    name: "SportsPredictor.ai",
    description:
      "Real-time sports prediction data built for AI agents, not dashboards. Streaming, structured predictions with confidence scores across football, basketball, tennis, and more — via REST and WebSocket feeds designed to plug straight into an automated ingest-evaluate-execute agent loop.",
    image: "/img/projects/sportspredictor.jpg",
    href: "https://sportspredictor.ai/",
  },
  {
    name: "NFTSwap.gg",
    description:
      "A Solana NFT trading platform for swapping NFTs directly with other collectors — no need to sell to cash and buy back in — with low beta fees and a \"Magic Swaps\" matching feature to find trade partners faster.",
    image: "/img/projects/nftswap.jpg",
    href: "https://nftswap.gg/",
  },
  {
    name: "BEERO",
    description:
      "AI-powered bookkeeping for small businesses. Snap a receipt, send an invoice, and file quarterly taxes automatically — flat $9/month, no accountant required. The full product is a private app; this is its public marketing page, hosted here for display.",
    image: "/img/projects/beero.jpg",
    href: "/beero",
  },
  {
    name: "ALFRED",
    description:
      "A financial-brain research agent that automates fundamentals gathering and strategy hypotheses — pulling market data, filings, and price action together to surface investment ideas and stress-test trading theses without manual research.",
    image: "/img/projects/alfred.png",
  },
  {
    name: "Algobrain",
    description:
      "An LLM \"wiki-brain\" knowledge base for crypto trading strategy generation — roughly 4,900 interlinked markdown nodes covering strategies, market concepts, assets, and quant methodology, explorable as an Obsidian graph and served to AI agents through a free local MCP server that can derive millions of unique, specifiable trading strategies.",
    image: "/img/projects/algobrain.gif",
    href: "https://github.com/Crypto-Data-API/algobrain",
    linkLabel: "View on GitHub",
  },
  {
    name: "Hyperliquid Trading Agent",
    description:
      "An autonomous trading agent built on Hyperliquid, the on-chain perpetuals exchange — watching markets, managing positions, and executing trades directly against Hyperliquid's order book without manual intervention.",
    image: "/img/projects/hyperliquid-trader.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects We've Built</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A look at the products and agents to come out of VENTURE AI LABS — infrastructure, marketplaces, and
            autonomous agents shipped end to end.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </a>
              ) : (
                <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed flex-1">
                  {project.description}
                </p>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    {project.linkLabel ?? "Visit site"}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
