---
title: "Banks, Rockets, and Power Bills"
excerpt: "Software eating the world is the most over-told story in tech. What gets skated over is why the big, successful players can't move even when they see it coming, and why you can't outsource being a software company."
pubDate: "2026-06-30"
date: "Jun 2026"
category: "Opinion"
readTime: "9 min"
featured: false
draft: false
tags: ["ai", "software-defined", "startups", "fintech"]
---

I recently watched RJ Scaringe, founder and CEO of Rivian, on the No Priors podcast, and one phrase stuck: "software-defined vehicle." Most legacy carmakers, he argues, still run on "little islands of software": dozens of separate controllers and modules, each from a different supplier, none really talking to each other. Rivian got that down to three zone controllers on a single stack they update monthly; Tesla did something similar. His claim is blunt: by the early 2030s, a carmaker that hasn't made the shift won't exist at scale.

The legacy car makers never designed for change. They built for a world where a platform stayed fixed for years and the factory was the hard part.

What caught me wasn't the car part, though. It's how cleanly the pattern maps onto industries with nothing to do with vehicles, and what it implies for the people running them. None of the broad strokes are new, I'll admit: "software is eating the world" is the most requoted line in tech, and "big companies are slow to change" isn't far behind. The question I care about is quieter, and I suspect a lot of people have it backwards.

*As AI takes over more of the technical work, does understanding technology become less of a problem for whoever's running the place, something you can finally hand off and stop worrying about? Or more of one?*

I've come round to the second view. A lot of the answer turns out to be structural, the specific, almost mechanical reasons the old guard can't move even when it sees what's coming, and partly I care because I'm building a company on exactly that bet.

## The pattern

Take banking. Revolut launched in 2015 with a few engineers and one app, and from the start built its own technology, bounded tightly to what it needed, rather than buying a stack of vendor products and bending itself to fit them. Ten years on: around 65 million customers, a UK banking licence, moving into mortgages. The big banks look nothing like that underneath, each division running its own portfolio of mostly-bought systems over a shared core that often still traces back to a mainframe and code older than the people maintaining it.

Closer to home, the same thing is happening to electricity. Amber sells power by passing the live wholesale price straight through to you in an app, for a flat monthly fee. The big retailers buy the same power and resell it as fixed "plans" with a markup, on systems built for a world that didn't change by the half-hour. The product is the software.

The same split turns up almost anywhere: Lemonade and Oscar against the established insurers in the US, SpaceX and Rocket Lab building, flying and rebuilding rockets at a cadence ULA, Boeing and Arianespace can't touch. Even John Deere, one of the few old-school giants to genuinely pull off the pivot to software and data.

The common thing here isn't "they use technology better." It's structural: for the new entrants, software isn't a department or a cost centre, it's their DNA. They were forced into a clean architecture by the constraint that forces every startup into its best decisions. No money, no spare people, so you build one coherent thing because you can't afford anything else.

Established firms fragment for two reasons that feed each other. First, Conway's Law: organisations ship their org chart. A dozen business units, each with its own budget and management layers, is always going to produce a dozen disconnected systems; the little islands of software aren't an accident, they're the org chart rendered in code. Second, and I've watched this in every job I've had and as a consultant: when software isn't seen as core to the product, the reflex is to buy. Often that's right; nobody should build their own payroll or email. The mistake is buying the part that's meant to be your edge, the thing a rival can't pull off a vendor's shelf, because outsourcing that looks like it de-risks delivery too. What you get instead is a patchwork someone has to integrate, maintenance that creeps up every year, and a product experience that ends up being nobody's job. The real limit on how fast a business can change isn't its technology; it's its shape.

## The spending trap

This is where the frog gets boiled. A startup is forced to be efficient: you can't run 224 software applications (the McKinsey average for a bank, per billion of revenue) on a few million in seed funding, so you build one thing, cleanly, because otherwise you die. The constraint produces the elegance; it's not that startups are smarter, it's that they're broke.

An established company has the opposite problem: it can *afford* to be inefficient, so it's one reasonable decision at a time. A system here, a layer of middleware there, each sensible on its own, nobody clocking that the water's warming. Accenture reckons legacy banks sink about 75% of their tech budget into maintenance, just keeping the lights on, leaving a quarter for anything new. Fintechs invert that: a bank spending a billion has maybe $750 million locked into the past, while a fintech spending $50 million might put $35-40 million into the future. And it creeps in slowly, a few percent a year, every quarter like the last, so it never trips the alarm. The frog never jumps.

The mess is hard to clean up, too, because someone always defends it: the vendors and internal teams whose budgets depend on the parts staying separate. Not a technology problem; an incentive problem in a technology problem's clothes.

## Why can't they see it?

So why don't the people in charge just fix it? Partly because they can't see it.

The CEOs running legacy banks, insurers and carmakers are mostly domain experts from non-technical tracks. Their business judgement is real, but technology is the one part of the job they've been allowed to treat as someone else's: a thing to delegate, not a literacy to hold. So IT reads as one budget line, large and fundamentally a cost, and the CTOs who might reframe it have their own budgets to defend.

Daniel Kahneman has a name for it: *theory-induced blindness*. Once you've taken on a theory and use it as a tool, you stop noticing its flaws; contradicting evidence gets absorbed rather than triggering a rethink. For someone who's spent thirty years treating technology as a cost to manage, "IT is a cost centre" isn't a view you argue them out of, it's the lens they look through. A rival shipping monthly, or a trillion dollars vanishing from software stocks in a week, doesn't land as *my model is wrong*. It lands as noise. (The idea is from *Thinking, Fast and Slow*.)

And suppose a leader does see it. That's only the first barrier. The second is that understanding what software-defined operation means isn't something you absorb from a slide. As I wrote last time, you can't read your way in; it happens in the doing, continuously, and it takes sustained effort. Hard enough for one person, brutal for a large organisation where the day job never lets up. So it's a double bind: the blindness hides the problem, and the load blocks the cure. The bigger the company, the worse both halves get.

And I'm not describing this from the outside. I've been on the inside of it, and knowing the technology didn't save me. As a CTO I made the trade you make under pressure: chasing the near-term product win that might move revenue, at the quiet cost of the agility we'd need later. I knew the right answer was to architect for speed of change, which meant saying no to a steady stream of perfectly reasonable requests from the rest of the business, and it usually settled into a stalemate: a bit of everything to keep everyone happy enough. Real progress? Not enough, to be honest. No villains in that story, which is rather the point.

## And it's speeding up

Even the software-native winners shouldn't get too comfortable. Early in 2026 the so-called "SaaSpocalypse" knocked close to a trillion dollars off enterprise-software stocks in about a week, on a simple thesis: AI agents are starting to eat the per-seat model the whole industry was built on. Whether that was a one-week panic or the first tremor of something larger is still being argued over. But the direction is hard to miss: Marc Andreessen said software was eating the world in 2011, and the early bet now is that AI is doing the same to software.

And as the cost of building collapses, the reflex to treat software as something you buy in rather than something you think in gets more expensive by the month. None of which makes systems thinking less important; it makes it more of the job. Legacy firms aren't only running on 1960s infrastructure; they're running on 1960s organisational principles too, and they'll struggle to keep pace unless the people at the top have both the instinct to feel the urgency and the literacy to act. Most have neither.

## So what do you do about it?

The instinct that fails is the comfortable one: hire a capable technology leader, give them autonomy, treat the problem as handled. Delegating like that feels responsible, like good management, and for a long time it was. I know the pull of it, because I spent years doing exactly that; there was always something more urgent than relearning how the technology under me actually worked.

It no longer works because technology has stopped being something you can hold at arm's length. It's become one of three things a leader has to genuinely carry (how the technology works, how the business makes money, and the domain itself), and almost nobody turns up with all three. So the job is to learn which of your legs is the short one, then fix it or bind yourself so tightly to someone who has it that the gap closes. Not a CTO two levels down with a budget to defend, but someone whose understanding sits right next to yours. Either way, the move is the same: refuse to make technology someone else's job.

I'm hardly neutral, mind you. I'm building on exactly this bet, so take the conviction with the right pinch of salt. The last post was about the unlearning AI forces on us as individuals; this is the same problem one level up, and the harder of the two: an organisation, and the person running it, having to relearn what the job actually is.

And I should be straight about the other half of it. I'm not building a software company. I'm building a startup that helps people into their first home. The bet is that the old distinction between business and technology has stopped mattering, and that building a company software-defined from day one is the advantage. More about how I go about this in a later post.

Which leads me back to my initial claim. You can't outsource being a software company. Not even, it turns out, when you're not really one.

---

## References

- RJ Scaringe on No Priors podcast — [Apple Podcasts](https://podcasts.apple.com/ca/podcast/rivians-roadmap-to-ai-architecture-and-autonomy/id1668002688?i=1000749420025) (February 2026)
- RJ Scaringe on the Cheeky Pint podcast with John Collison — [pod.wave.co](https://pod.wave.co/podcast/cheeky-pint-fff21cc3-6db3-456b-823e-89d0b4982ab7/how-to-build-a-16b-car-company-with-rj-scaringe-founder-of-rivian) (October 2025)
- McKinsey, "Managing bank IT spending" — [mckinsey.com](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/tech-forward/managing-bank-it-spending-five-questions-for-tech-leaders)
- McKinsey, "Unlocking value from technology in banking" — [mckinsey.com](https://www.mckinsey.com/industries/financial-services/our-insights/unlocking-value-from-technology-in-banking-an-investor-lens) (October 2024)
- Daniel Kahneman, *Thinking, Fast and Slow* (2011), on theory-induced blindness
- Melvin Conway, "How Do Committees Invent?" (Datamation, 1968), the origin of Conway's Law
- Gene Kim, *The Phoenix Project* (2013) and *The Unicorn Project* (2019), on org dysfunction and flow in IT
- David Hyman (Lendi) on the CEO and CTO partnership — [LinkedIn](https://www.linkedin.com/posts/dhyman_ceo-cio-unfair-advantage-only-if-theyre-share-7359004902120935425-5Xu9/)
- David Prosser, "The Return Of The Software-Defined Business" — [Forbes](https://www.forbes.com/sites/davidprosser/2025/07/10/the-return-of-the-software-defined-business/) (July 2025)
- Marc Andreessen, "Why Software Is Eating the World" — [a16z.com](https://a16z.com/why-software-is-eating-the-world/) (2011)
- Fortune, "Marc Andreessen made a dire software prediction 15 years ago" — [fortune.com](https://fortune.com/2026/02/13/marc-andreessen-software-eating-the-world-saaspocalypse-morgan-stanley-gut-check-displaced-labor/) (February 2026)
