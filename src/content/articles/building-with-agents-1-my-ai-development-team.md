---
title: "Building with Agents #1: My AI Development Team"
excerpt: "How I work with AI agents to build Guidy, and why trust gets built the same way it does with people: through process, gates, and admitting the bottleneck is me."
pubDate: "2026-08-17"
date: "Aug 2026"
category: "Building with Agents"
readTime: "6 min"
featured: false
draft: true
tags: ["ai", "agents", "building-with-agents", "guidy"]
---

I've been meaning to start this series since March (says the Linear issue, which tells you plenty about how I stick to content plans). So: first in a recurring series about building a company with agents doing real work.

The company is [Guidy](https://guidy.au), a platform helping Australian first home buyers make sense of property and lending and secure their first home. I'm building it mostly alone. Except not really alone: day to day I work with Claude for research and drafting, Claude Code in the codebase, and a growing set of agents in between.

Everyone talks about whether you can trust AI, and much less about how trust actually gets built. My answer, after seven months of this (and it probably shouldn't be a surprise): the same way it gets built with people. You don't grant it unconditionally, however impressive the CV. You build the process that warrants it, and you loosen the process as the track record accumulates.

## So who's on the team?

Claude handles research and drafting (market research, regulatory background, this post). Claude Code lives in the repo and writes most of the product. [Linear](https://linear.app) sits between us as the shared source of truth: every piece of work is an issue, every issue is a brief. (Sidenote: the choice of Claude these days is probably equal parts deliberate tool choice and convenience.)

What took longer to internalise is that these aren't tools you pick up and put down. They're colleagues you brief, review, and (this is the part people skip) manage. What surprised me though is how little of it is new. Clear briefs, honest review, trust extended as it's earned: this is just what working with people looks like, and working with agents turned out the same. The main difference is the shape of the colleague: an agent can nail a hard serviceability calculation and then confidently botch something trivial an hour later (I wrote about this jaggedness [last time](/articles/ai-practical-value-beyond-the-hype)).

## Trust, but build the gates first

A framing I've always liked: the job is laying rails so the team falls into the pit of success, where the default path is the right one and you have to work to get into trouble. (I'd have sworn that was a Scott Hanselman idea; turns out it's Rico Mariani's, from 2003.) That's what the gates are. Not policing. Rails. They arrived in roughly the order you'd introduce them for a person.

First, briefs. Early on I'd give Claude Code loose instructions and get back plausible, off-target work (my fault as much as its: the scope lived only in my head). Now the scope lives in Linear, in writing, before work starts, and Claude is usually part of thinking it through: I talk the problem out, it pokes at the gaps, and ambiguity gets caught at the cheap end.

Second, review. Nothing merges without the PR being read, though who reads it has changed. This is where it all started: I read every PR line by line for months. These days I skim, and a review agent does the thorough pass. I trust its attention more than my own now, which felt strange to admit. It shouldn't: you stop scrutinising a senior engineer's every commit once the track record is there.

Third, and most recently, evals. If you haven't met the term: tests, essentially, but for the AI's answers rather than the code (software people can think of them as end-to-end tests with judgement). You write down the questions that matter and what a right answer looks like, then check automatically on every change. This gate exists because Guidy doesn't just get built with AI; it *is* AI. When a first home buyer asks whether they can actually buy something, an AI answers. So "the code merged and the tests pass" stops meaning done. Done has to mean *the answer is right*.

So we built an eval suite around the twelve questions first home buyers actually ask, pulled from a couple of hundred community posts, thirteen thousand comments, and interviews we ran ourselves, not from our own architecture diagrams. We discovered that for three of the twelve, Guidy was answering a *different question* than the one asked. Every signal said success: a polished answer came back, nothing errored, dashboards were green. Nothing checked whether the answer matched the question. Manual code review couldn't catch it. The fix wasn't reviewing harder; it was an eval for exactly that, wired into CI so it can't quietly regress. Any time the system makes a mistake, you engineer things so it can't make it again.

## The bottleneck is me

The agents produce faster than I can review, and my working memory caps how many threads I can hold at once. The gates turned out to have a second job I didn't design them for: they remember what I can't.

The example that settled it: on the first full eval run, the most-asked question in our research ("here's my situation, can I buy?") failed. Not because the answer was wrong. The answer never showed up at all. We'd built it weeks earlier, merged it, done. But the path a user takes to reach it ran through two other steps that were still half-built, so the finished answer sat there behind unfinished work, waiting for users who could never arrive. And I'd completely forgotten it was there. Built the thing, shipped the thing, lost the thing. No agent failed. I did. The eval suite found it; my head never would have.

The briefs, the reviews, the evals: I built them to check the agents, and half their value is compensating for me.

## The takeaway

The hard part, seven months in, isn't any single gate. It's the altitude changes. In one day I'll go from company strategy, to a line-by-line diff, to a failing eval about whether a number carries a date. Humans are famously bad at multitasking, and that doesn't stop being true because your team is artificial. Managing agents mostly means managing yourself: your attention, your review capacity, your memory.

And trust did grow, just not where I expected. It grew in the *system*, not the model. Some things now run without review that I wouldn't have allowed six months ago. It cuts the other way too: we recently tightened the evals so that every figure we quote has to carry a date for when it was last verified, because lending policy moves constantly and a right answer from March can be a wrong answer in August. That change sent our own scorecard from two passing to zero. That felt bad but was correct. Warranted trust sometimes means watching your score go down.

Next in the series: turning user conversations into product decisions, deciding *what* to build, not just building it.

This post was obviously drafted with help from the team, gates included. Thanks for reading, and let me know what you think.
