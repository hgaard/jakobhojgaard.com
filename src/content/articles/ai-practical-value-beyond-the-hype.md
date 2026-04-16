---
title: "AI's Practical Value Beyond the Hype"
description: "The debate about AGI and bubbles will continue. Meanwhile, the people who are heads-down learning to work with these tools are quietly becoming dramatically more effective."
pubDate: 2026-04-22
draft: true
tags: ["ai", "productivity", "agents", "opinion"]
---

## The 20/60/20 Problem

Steve Yegge set off a bit of a firestorm recently when he claimed that Google's internal AI adoption looks roughly the same as John Deere's — the tractor company. His argument, based on a conversation with a longtime Google tech director, was that even at the company that builds the models, you see the same industry-wide split: about 20% agentic power users who've fundamentally changed how they work, 20% outright refusers, and a big 60% in the middle still mostly using chat-based tools as a slightly fancier search engine.

Google pushed back, and I'm sure there's truth on both sides. But whether or not Yegge's numbers are precisely right about Google specifically, the pattern he's describing resonates with what I see across the industry. And what interests me isn't the 20% on either extreme — it's that 60% in the middle.

Because the conversation around AI right now is dominated by the extremes. On one side: AGI is imminent, every job is about to evaporate, the singularity is next Tuesday. On the other: it's all a bubble, LLMs are just fancy autocomplete, big enterprises can't even show ROI. There's plenty of well-reasoned content arguing both positions — and I'm not going to add to either pile. What I think gets lost in that noise is a more boring, more useful question: what can we actually do with this stuff *right now*, today, in the work we're already doing?

<!-- JAKOB: You might want to sharpen the transition from Yegge into the binary debate. Does the Google example naturally lead into the extremes conversation for you, or would you rather get to the "boring useful question" faster? -->

## What 25 Years in Tech Tells Me

I've been working in technology for over 25 years. I've seen a lot of hype cycles — some that delivered, some that didn't, most that landed somewhere in between. And I'll say this plainly: it feels like there has been more meaningful change to the industry in the last few months than in the previous 20 years. That's not something I say lightly, and it's both exciting and terrifying in roughly equal measure.

But there's a pattern worth noting here. Goldman Sachs published an analysis earlier this year showing no meaningful relationship between productivity and AI adoption at the economy-wide level — even as a record 70% of S&P 500 management teams were talking about AI on their earnings calls. Only about 1% had actually quantified its impact on earnings. The National Bureau of Economic Research described this as a "productivity paradox" — perceived gains that are larger than measured ones.

We've been here before. The exact same thing happened with personal computers in the 1970s and 80s. The economist Robert Solow famously quipped in 1987 that "you can see the computer age everywhere but in the productivity statistics." It took another decade before the productivity gains actually showed up in the numbers. The technology was real. The benefits were real. But the hard work of integrating it into how people and organisations actually operate — that took much longer than anyone expected.

I think we're in a very similar moment with AI, except the cycle is compressed. The technology is genuinely powerful. The benefits are real for those who've figured out how to use it. But "figuring out how to use it" turns out to be the hard part, and it's not primarily a technical problem.

<!-- JAKOB: This is where your personal experience grounds it. You might want to add a sentence or two about what it specifically feels like day-to-day — the compression of what's possible, the pace of change in your own workflows. Keep it brief but concrete. -->

## AI as Colleague, Not Magic Box

So what are the people in that 20% power-user group actually doing differently? Having followed and learned from a few of them closely, I think the common thread is deceptively simple: they've stopped treating AI as a tool and started treating it as a colleague. That sounds like a semantic distinction, but it changes everything about how you work.

Steve Yegge — 40+ years in the industry, stints at Amazon, Google, Grab — was initially sceptical of LLMs. He became a convert after trying Claude Code, and now argues the industry is heading into the steep part of an S-curve that shows no signs of flattening. He built Gas Town, an open-source agent orchestrator, and published a book called "Vibe Coding." But what's most interesting about Yegge isn't the tools he's built — it's how he talks about the mindset shift. He describes maturity stages in how engineers relate to AI, from basic autocomplete usage all the way up to full agentic orchestration. The jump between stages isn't about the model getting smarter. It's about the human changing how they work.

My former colleague Geoffrey Huntley took a different path to a similar conclusion. He talks about working "with the grain" of what AI can do — not fighting against its limitations or trying to force it into patterns designed for human teams, but redesigning the patterns themselves. He coined the concept of the "Ralph Loop" — a tight feedback cycle between human intent and agent execution — and is now building Latent Patterns, an education company focused on teaching people these new workflows. The insight is that the old ways of briefing work, reviewing output, and structuring projects don't transfer cleanly to working with agents. You need new patterns.

And then there's Boris Cherny, who heads up Claude Code at Anthropic. He shipped 259 pull requests in 30 days — every line written by Claude Code. What's striking about Cherny's approach isn't its scale but its ordinariness. There's no exotic orchestration framework, no multi-agent swarm. It's a disciplined workflow of clear task decomposition, good prompting, and careful review. The magic, such as it is, comes from having deeply internalised how to collaborate with the tool.

The common thread across all three: the technology is important, but the relationship with the technology is what makes the difference. They've each done the hard work of unlearning how they used to operate and rebuilding their workflows from the ground up.

<!-- JAKOB: This section references three people you know or follow. You might want to add brief personal context for each — how you came across their work, why it resonated with you specifically. Even a clause like "Geoffrey was a colleague at Readify" or "I've been following Yegge's writing since his Google rant days" would ground these in your voice rather than feeling like a research summary. -->

## The Unlearning Problem — and Why We're Inventing New Disciplines for It

Here's where it gets interesting. The difficulty of this transition is so significant that the industry has literally had to coin new terminology for it.

You might have heard of prompt engineering — the art of asking an AI the right question in the right way. That was the first wave. Then came context engineering — making sure the model has the right information available to reason about. That was the second wave. Now there's a third wave emerging that people are calling harness engineering, and it's the one that I think best captures what's actually required.

Harness engineering is the discipline of designing everything *around* the model — the tools it can access, the constraints that keep it on track, the feedback loops that help it self-correct, the tests that verify its output. The formula that's emerged is simple: Agent = Model + Harness. The model is the engine. The harness is everything else — and increasingly, the harness is where the real engineering happens.

What I find compelling about this framing is that it makes the unlearning problem concrete. The OpenAI Codex team (who built a production application with over a million lines of code, none written by human hands) found that when something failed, the fix was almost never "try harder" or use a smarter model. Instead, their engineers would step into the task and ask: "what capability is missing, and how do we make it legible and enforceable for the agent?" That's a fundamentally different question from anything in the traditional engineering playbook.

The progression from prompt engineering to context engineering to harness engineering is really a roadmap of the industry collectively learning — and unlearning. Each stage represents a deeper understanding that the bottleneck isn't the model's intelligence. It's our ability to create the conditions for it to work effectively. And creating those conditions means letting go of a lot of assumptions about how work gets done.

UC Berkeley researchers found something that illustrates the cost of *not* doing this unlearning. Their study embedded at a tech company showed that AI didn't reduce workloads — it intensified them. Tasks got faster, so expectations rose. Expectations rose, so scope expanded. Product managers started writing code. Researchers took on engineering work. Role boundaries dissolved because the tools made it feel possible, and then the exhaustion arrived. They called it "workload creep." The tools were genuinely powerful. But without rethinking how work is structured — without building the harness — the gains turned into burnout.

<!-- JAKOB: You're living the harness engineering process yourself with your CLAUDE.md files, your Linear setup, your content workflow split between Claude.ai and Claude Code. You might want to drop in one concrete example of how you've experienced this — even a sentence like "I've gone through several iterations of my own CLAUDE.md file, and each revision was basically me learning something new about how to structure work for an agent." -->

## Read More Sci-Fi — No, Seriously

OK, slight gear change. This might seem like an odd recommendation in a post about AI productivity, but bear with me — and actually, the fact that it seems odd is part of the point. I'll come back to that.

I've found that reading science fiction — and I mean proper speculative fiction, not just sci-fi-flavoured thrillers — is one of the most useful things I do for keeping up with what's happening in AI. Not because it predicts the future (it mostly doesn't), but because of what it does to how you think.

There's solid research behind this. Emotional arousal — the kind of heightened state you get from a gripping story about first contact, or a thought experiment about what consciousness means for a digital mind — genuinely improves how well your brain encodes and retains new information. The amygdala activates during emotionally arousing experiences and modulates memory storage, making those experiences more durable and accessible. Studies have shown that even inducing emotional arousal *after* learning something enhances recall weeks later.

But it's not just the arousal effect. Fiction — particularly speculative fiction — exercises exactly the cognitive muscles that matter most right now: flexible thinking, the ability to imagine scenarios that don't yet exist, perspective-taking. Researchers at Ohio State found that giving people at companies stuck in analytical paralysis children's books about rule-breaking kids made them approach real business problems more creatively. The fiction shifted them out of their habitual thinking patterns.

So when I read Iain M. Banks writing about Culture Minds, or Ted Chiang's thought experiments about language and perception, it's not escapism. It's priming. It puts my brain in a state where it's better equipped to think about what an AI agent workflow could look like in six months — because I've just spent time in a world where the assumptions are different.

And here's the meta-point I promised. The fact that you just read a recommendation for science fiction in the middle of a post about AI productivity — and it probably made you pause for a second, maybe even raised an eyebrow — that's the mechanism working on you right now. A slight jolt of "wait, what?" is itself an attention trigger. Emotional responses, even mild ones like surprise or amusement, enhance how well you encode what you're reading. You're more likely to remember this section precisely because it felt unexpected. The research says so, and now you've experienced it.

<!-- JAKOB: This is the section that's most "you" and I think it mostly works. You might want to name 2-3 specific books or authors that have been particularly useful for you recently — concrete recommendations land better than general gestures at the genre. The previous outline mentioned Banks and Chiang, but add whatever's actually on your nightstand. -->

## It's About Productivity, Not AI

Here's the punchline, and it's deliberately anticlimactic: AI in its current form is not really about artificial intelligence. It's about productivity — personal and organisational.

The companies and individuals who figure out how to work *with* these tools — who do the hard, unglamorous work of unlearning old patterns and building new ones — will have a massive, compounding advantage. Not because they have access to better models (the models are increasingly commoditised), but because they've built the harness. They've redesigned how they work.

The debate about AGI and bubbles will continue. Meanwhile, the people who are heads-down learning to work with these tools are quietly becoming dramatically more effective. That's not hype. That's the boring, practical truth.

And if you're in that 60% in the middle — using AI as a slightly fancier search engine, knowing there's more to it but not sure how to make the leap — the good news is that this is a learnable skill. The people I've referenced in this post aren't superhuman. They're just further along in the unlearning process. The path is well-lit at this point. You just have to walk it.

<!-- JAKOB: You might want to end with a pointer to the "Building with Agents" series that's coming — something like "I'm going to be writing more about the specifics of how I'm doing this in an upcoming series. Stay tuned." Gives readers a reason to come back. -->

---

## References and Further Reading

- Steve Yegge's Google AI adoption thread (April 2026) — [X post](https://x.com/Steve_Yegge/status/2043747998740689171)
- Steve Yegge interview with Gergely Orosz, "Steve Yegge on AI Agents and the Future of Software Engineering" — [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/steve-yegge-on-ai-agents-and-the) (February 2026)
- Geoffrey Huntley — [Latent Patterns](https://www.latent.space/) <!-- JAKOB: check this URL -->
- Boris Cherny's 259 PRs with Claude Code — [X post](https://x.com/AKBorischerny) (December 2025) <!-- JAKOB: find the exact tweet -->
- Birgitta Böckeler, "Harness Engineering for Coding Agent Users" — [Martin Fowler's site](https://martinfowler.com/articles/harness-engineering.html) (April 2026)
- OpenAI, "Harness Engineering: Leveraging Codex in an Agent-First World" — [OpenAI blog](https://openai.com/index/harness-engineering/) (February 2026)
- The Daily AI Brief, "Harness Engineering 101" — [Spotify](https://creators.spotify.com/pod/profile/nlw/episodes/Harness-Engineering-101-e3hqs2e) (April 2026)
- Tyng et al., "The Influences of Emotion on Learning and Memory" — [Frontiers in Psychology](https://pmc.ncbi.nlm.nih.gov/articles/PMC5573739/) (2017)
- Angus Fletcher on fiction and creativity — [Ohio State University](https://www.osu.edu/impact/arts-and-creativity/fletcher-power-stories)

<!--
NOTES FOR JAKOB:
- This is ~1,800 words, roughly a 7-8 minute read. The outline targeted 3-5 minutes (~1,200 words). You might want to tighten — the "AI as Colleague" section is the longest and could be trimmed if needed.
- The HTML comments throughout are prompts for you to add personal context. Delete them once you've addressed them.
- No company name mentioned anywhere — kept it general as per BUS-26 acceptance criteria.
- Frontmatter uses standard Astro content collection fields. Adjust pubDate to your actual publish date.
- Hand off to Claude Code with: "add this to content/blog/, match the frontmatter format of my existing posts, keep draft: true"
-->
