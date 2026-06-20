---
title: "AI's Practical Value Beyond the Hype"
excerpt: "The AI conversation is dominated by the extremes — imminent AGI or pure bubble. After 25 years in tech and six months building with these tools daily, here's the more useful question: what the 60% in the middle can actually do with them right now."
pubDate: "2026-06-09"
date: "Jun 2026"
category: "Opinion"
readTime: "11 min"
featured: true
draft: false
tags: ["ai", "productivity", "agents", "opinion"]
---

## The 20/60/20 Problem

Earlier this year, Steve Yegge set off a bit of a firestorm by claiming Google's internal AI adoption looks roughly the same as John Deere's — the tractor company. His argument was that even at the company that builds the models, you see the same industry-wide split: about 20% agentic power users who've fundamentally changed how they work, 20% outright refusers, and a big 60% in the middle still using chat tools as a slightly fancier search engine.

Google pushed back, and there's probably truth on both sides. But whether or not Yegge was right about Google specifically, the broader pattern has since been measured at scale. Writer's 2026 Enterprise AI Adoption Survey found 92% of the C-suite are now actively cultivating an "AI elite" — super-users reported to be roughly 5 times more productive than slow adopters — while 60% of leaders say they're planning layoffs for employees who can't or won't adopt AI.

So the 20/60/20 split, give or take, is real. And what interests me isn't the 20% on either extreme — it's that 60% in the middle. Because the conversation right now is dominated by the extremes. On one side: AGI is imminent, every job is about to evaporate, the singularity is next Tuesday. On the other: it's all a bubble, LLMs are just fancy autocomplete, the productivity numbers aren't there. Both camps are well-argued and I'm not going to add to either pile. What gets lost in the noise is a more boring, more useful question: what can we actually do with this stuff *right now*, in the work we're already doing?

## What 25 Years in Tech Tells Me

I've been working in technology for over 25 years, through a lot of hype cycles — some that delivered, some that didn't, most landing somewhere in between. And I'll say it plainly: there's been more meaningful change to the industry this year than in the previous 20. That's both exciting and terrifying in roughly equal measure.

We've seen the shape of this before, though. Goldman Sachs published analysis earlier this year showing no meaningful link between productivity and AI adoption at the economy-wide level, even as nearly every big company talked it up — and barely 1% had quantified any impact. Economists call it a productivity paradox: perceived gains running ahead of measured ones. The same thing happened with personal computers. Robert Solow's 1987 quip — that you could see the computer age everywhere but in the productivity statistics — held for another decade before the gains finally showed up. The technology was real. The benefit was real. The hard part was integrating it into how people and organisations actually work.

I think we're in that same gap with AI, just compressed — and it took leaving to see it. For most of my career I was a technology executive, and if I'm honest, I didn't take this shift seriously enough; there was always something more urgent, and the day job never left room to stop and relearn how I work. It's only in the six months since — building my own business with these tools in my hands every day — that the scale of it has landed. This isn't a tooling upgrade; it's a different way of working, and absorbing it takes real, deliberate effort. That's a big part of why I'm writing this — and why I suspect it's even harder inside a large organisation, where the room to stop and rethink is scarcer still.

## AI as Colleague, Not Magic Box

So what is that 20% actually doing differently? Having followed a few of them closely, the common thread is deceptively simple: they've stopped treating AI as a tool and started treating it as a colleague. It sounds like a semantic distinction. It changes everything.

Andrej Karpathy — a founding member of OpenAI who joined Anthropic's pretraining team in May — captured why in one line. Working with an LLM, he said, feels like talking to "an extremely brilliant PhD student who's been a systems programmer their entire life, and a 10-year-old" at the same time. He calls this jaggedness: models are brilliant and hopeless in ways no human colleague ever is, nailing a hard problem and then fumbling something obvious. You can't relate to that like a predictable tool. You have to learn its strengths and blind spots the way you'd learn a teammate's.

The people furthest up the curve have internalised exactly that. Steve Yegge — 40+ years in, ex-Amazon and Google, and someone whose writing I've followed for years — was an LLM sceptic until Claude Code converted him, and now describes maturity stages in how engineers relate to AI, where the jump between stages is about the human changing, not the model. My former colleague Geoffrey Huntley talks about working "with the grain" of what AI can do — redesigning how you brief and review work rather than forcing agents into patterns built for human teams. And Boris Cherny, who heads up Claude Code at Anthropic, shipped 259 pull requests in a month with every line written by Claude Code — not through some exotic multi-agent swarm, but through a disciplined, almost ordinary workflow of clear tasks, good prompting, and careful review.

The common thread: the model matters, but the relationship with it is what makes the difference. They've each done the work of unlearning how they used to operate and rebuilding from the ground up.

## The Unlearning Problem — and Why We're Inventing New Disciplines for It

Here's where it gets interesting. This transition is hard enough that the industry has had to invent new vocabulary for it.

First there was prompt engineering — asking the right question the right way. Then context engineering — making sure the model has the right information in front of it. And in the last six months a third wave has hardened into a discipline people call harness engineering: designing everything around the model — the tools it can reach, the guardrails that keep it on track, the feedback loops that let it self-correct, the tests that verify its output. The formula that's settled is Agent = Model + Harness. Mitchell Hashimoto put the principle as cleanly as anyone: any time an agent makes a mistake, you engineer a solution so it can't make that mistake again. Tools like Claude Code and Codex are themselves harnesses — and increasingly, the harness is where the real engineering lives.

What I like about this framing is how concrete it makes the unlearning. The OpenAI Codex team found that when something failed, the fix was almost never "try harder" or a smarter model — it was to ask what capability was missing and how to make it enforceable for the agent. That's a different question from anything in the old playbook. Even Karpathy admits he hasn't written a line of code himself since December, and describes a low-grade anxiety about keeping up with what's now possible. When one of the field's most respected practitioners feels behind, that's a useful calibration: the bottleneck isn't the model's intelligence, it's our ability to build the conditions for it to work.

This isn't abstract for me. Building my own business, I've found I'm spending as much effort evolving the harness as building the product itself — binding the pieces together into something an agent can actually operate inside. That's a whole topic on its own, though, so I'll save the details for a later post. [Building with Agents — link TK]

## This One Isn't Optional

Let me make a slightly uncomfortable point. It's tempting to blame busyness — we're all properly busy, with a permanent queue of urgent things. *I'll get to it when things calm down.* But I don't think busyness is really the problem. The harder truth is that an established way of working is genuinely difficult to unlearn, and the more successful you've been inside one, the more there is to disrupt. Choosing to dismantle your own habits, on purpose, while the work keeps coming — that's the actual ask.

And things are not going to calm down. Unlike most professional development you can reasonably defer, this one you can't. The Writer survey found 77% of executives say employees who won't become AI-proficient won't be considered for promotion. Geoff Huntley made the point vividly at AI Engineer Melbourne: a slide of a rope bridge over a chasm, people strung along it — the sceptic still on the near cliff ("prove this isn't hype"), the experimenter a few steps out, someone mid-span realising "oh no, will I have a job?", and on the far side those for whom AI is now just how they work, right up to the ones automating their own roles and managing other agents. It's the 20/60/20 split drawn as a single picture, and the bridge runs one way: if you haven't started across, before long you won't be employed.

The deeper reason, though, has nothing to do with promotions or layoffs. The *shape* of competent work in your field is changing. The people in that 20% aren't doing the same job faster — they're doing a different job, operating a level up, orchestrating rather than typing. Defer that and you don't stay still; you fall further behind every month.

And here's the part there's no shortcut for: you can't read your way in. Not enough YouTube, not enough newsletters. The unlearning happens in your hands — in a real workflow, with a real task, when the agent does something you didn't expect and you have to work out why. You have to do the work badly before you do it well.

<!-- JAKOB: PLACEHOLDER — a specific personal moment goes here. A time you carved hours out of a packed week to dig into something, and what it cost / what it unlocked. You said you wanted to think about what this should be. -->

## Read More Sci-Fi — No, Seriously

OK, gear change. This might seem an odd recommendation in a post about AI productivity — and the fact that it seems odd is part of the point, which I'll come back to.

Reading science fiction is one of the more useful things I do for keeping up with AI. Not because it predicts the future (it mostly doesn't), but because of what it does to your thinking. There's reasonable evidence that an emotionally heightened state — the kind a good story produces — helps your brain encode and hold onto new information, and that fiction exercises exactly the muscles that matter right now: flexible thinking, imagining things that don't exist yet, holding an unfamiliar frame in your head. When I read Asimov, or Iain M. Banks's Culture novels with their superintelligent Minds, it's not escapism so much as priming — I've just spent time somewhere the assumptions are different, which makes it easier to think about where this technology might be in six months. (If you want something lighter in the same spirit, Dennis E. Taylor's Bobiverse and Craig Alanson's Expeditionary Force both scratch the itch.)

And here's the meta-point. Did that recommendation make you pause — a small "wait, what?" in the middle of an AI productivity post? If so, that little jolt is the mechanism working: the odd, out-of-place ideas are the ones that stick, which is why you'll probably remember this bit longer than the rest. That was kind of the point.

## It's About Productivity, Not AI

Here's the punchline, deliberately anticlimactic: AI right now isn't really about artificial intelligence. It's about productivity — personal and organisational. The people and companies who do the unglamorous work of unlearning old patterns and building the harness will have a compounding advantage, not because they have better models (those are commoditising fast) but because they've redesigned how they work. For a business, that shift is bigger and almost certainly harder the larger the organisation — which is part of why the productivity gains I mentioned at the top haven't shown up in the aggregate numbers yet. I think they will.

There's a bigger version of this for organisations. For a company, adopting AI well isn't a tooling rollout — it's a rethink of how the business actually operates, and that only gets harder with size. My hunch is that it reshapes whole industries rather than shrinking them: as the cost of building falls, we end up wanting far more software, not less. But that's its own subject, and one for a separate post. [Software-defined disruption — link TK]

And if you're in that 60% in the middle — knowing there's more here but unsure how to make the leap — the good news is that, for you as an individual, this is squarely learnable. The people in this post aren't superhuman; they're just further along. Whatever you make of the bigger bubble-versus-boom question, what we already have in our hands is extraordinarily useful, and we've barely begun. The path is well-lit; the only catch is that walking it is still work, and nobody's going to walk it for you. Despite the vertigo, this is the most exciting time I can remember to be doing this.

---

## References and Further Reading

- Writer's 2026 Enterprise AI Adoption Survey — [writer.com](https://writer.com/blog/enterprise-ai-adoption-2026/) (April 2026)
- Steve Yegge's Google AI adoption thread — [X post](https://x.com/Steve_Yegge/status/2043747998740689171) (April 2026)
- Steve Yegge interview with Gergely Orosz on AI agents — [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/steve-yegge-on-ai-agents-and-the) (February 2026)
- Geoffrey Huntley — [Latent Patterns](https://latentpatterns.ai/) <!-- JAKOB: check URL -->
- Geoff Huntley, AI Engineer Melbourne talk — the rope-bridge / chasm slide is around 53:12 — [YouTube](https://www.youtube.com/watch?v=wjXowoQ7E8c)
- Andrej Karpathy joins Anthropic's pretraining team — [TechCrunch](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/) (May 2026)
- Andrej Karpathy on jaggedness and on shifting from code generation to knowledge bases — [X post](https://x.com/karpathy/status/2042334451611693415) (April 2026)
- Boris Cherny's 259 PRs with Claude Code — [X post](https://x.com/AKBorischerny) <!-- JAKOB: find the exact tweet -->
- Mitchell Hashimoto on harness engineering — [Faros AI summary](https://www.faros.ai/blog/harness-engineering)
- OpenAI, "Harness Engineering: Leveraging Codex in an Agent-First World" — [openai.com](https://openai.com/index/harness-engineering/) (February 2026)
- Tyng et al., "The Influences of Emotion on Learning and Memory" — [Frontiers in Psychology, 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5573739/)
