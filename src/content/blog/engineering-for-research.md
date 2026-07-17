---
title: "Engineering for Research: Tips for Students without Formal CS Background"
date: 2026-07-17
tags:
  - research engineering
  - learning
description: Practical engineering habits that can help students from non-CS backgrounds build more reliable research code, cleaner experiments, and calmer day-to-day workflows.
category: Essay
---

I started doing computational research with an academic background in Architecture and about 1.5 years of experience in the tech industry. Like many researchers coming from non-CS disciplines, I gradually realized that writing code for assignments and building software for research are very different things.

Research code often evolves over months or years. Experiments need to be reproducible. Data pipelines become increasingly complex. Collaborators need to understand your work. Most importantly, your future self will eventually become someone else&apos;s collaborator.

This post summarizes a few engineering practices that I found particularly valuable while transitioning into computational research. None of these require a computer science degree. They are learnable habits, and together they can dramatically improve research productivity.

## Start with reliability, not sophistication

One thing that helped me early on was to stop equating "good engineering" with writing clever code.

In research, the most valuable code is often not the most elegant or abstract. It is the code that:

- runs again next week,
- produces traceable outputs,
- is understandable to a collaborator,
- can be modified without breaking everything else.

If you come from a non-CS background, this is actually encouraging. You do not need to know every data structure or every design pattern before doing solid computational work. A small number of practical habits will already put you far ahead of many messy research codebases.

## Foundational skills worth learning early

### Git and version control

This is probably the first engineering skill I would recommend learning.

Version control makes experiments reproducible, allows safe refactoring, and makes collaboration much less painful than sending files back and forth. It also gives you the confidence to change your code, because you know you can recover earlier versions.

The basics are usually enough to get started:

- commits,
- branches,
- pull requests,
- merge conflicts,
- GitHub.

You do not need to become a Git power user immediately. A lightweight workflow like "make a small change, commit with a meaningful message, push regularly" already helps a lot.

### Linux and the command line

Many research workflows become easier once you are comfortable in a terminal.

The command line is useful for:

- navigating large projects,
- running experiments,
- managing remote servers,
- inspecting files quickly,
- automating repetitive tasks.

Learning a few commands well is much better than vaguely knowing many. I found it helpful to get comfortable with:

- `cd`, `ls`, `pwd`,
- `cp`, `mv`, `rm` (carefully),
- `grep` or `rg`,
- `ssh`,
- `tmux`,
- basic shell scripting.

If your experiments run on a cluster or a remote machine, command-line fluency stops being optional very quickly.

### Environments and dependencies

One of the most common sources of research friction is: "it worked on my machine three months ago."

This usually becomes a dependency problem. Different package versions, different Python interpreters, or undocumented installation steps can make a project fragile.

It helps to:

- use isolated environments such as `venv`, `conda`, or `poetry`,
- keep an explicit dependency file,
- document installation steps in a `README`,
- avoid relying on hidden local setup.

This is not glamorous work, but it pays off every time you revisit a project.

## Organize projects so future you can survive them

Many research projects start as a notebook or a single script. That is normal. The problem appears when the project grows but the structure never changes.

When experiments become more serious, it helps to separate concerns:

- `data/` for raw or processed data references,
- `src/` for reusable code,
- `scripts/` for entry points,
- `results/` or `outputs/` for generated artifacts,
- `notebooks/` for exploration rather than core logic.

The exact structure matters less than consistency. The real goal is to make it obvious where things live and what can be safely changed.

I also found it useful to keep notebooks lightweight. Notebooks are great for exploration, visualization, and prototyping, but they are often a poor place to hide the only implementation of a data pipeline or training loop. Once something matters, moving the logic into scripts or reusable modules usually makes the project easier to test and rerun.

## Treat reproducibility as a daily habit

Reproducibility is often discussed like an ideal end state, but in practice it is a set of small habits.

For example:

- save configurations used for each run,
- set random seeds when appropriate,
- log dataset versions,
- give output folders meaningful names,
- keep generated results separate from handwritten code,
- write down the exact command used to run an experiment.

Even a simple text file that records "what I ran and why" can be surprisingly valuable.

When projects become more complex, configuration files and experiment tracking tools can help. But even before using those tools, careful naming and documentation already go a long way.

## Build pipelines, not one-off miracles

In coursework, it is often enough to get the final result once. In research, you usually need to rerun everything after changing:

- a preprocessing step,
- a model hyperparameter,
- a data filter,
- an evaluation metric.

That is why it helps to think in terms of pipelines instead of isolated scripts.

A decent pipeline does not have to be elaborate. Often it just means:

1. raw data enters in one place,
2. preprocessing produces explicit intermediate files,
3. training or analysis consumes those files,
4. evaluation writes outputs in a predictable format.

This kind of structure makes debugging much easier. If something looks wrong in the final figure, you can inspect where the issue entered the pipeline instead of re-reading one giant script from top to bottom.

## Learn to debug systematically

Debugging becomes much less stressful once you stop treating it as a sign that you are not good at coding.

Most debugging is not about brilliance. It is about narrowing possibilities.

Some habits that help:

- make the failing case as small as possible,
- print shapes, counts, paths, and assumptions,
- check one stage of the pipeline at a time,
- inspect intermediate outputs,
- verify the data before questioning the model,
- write down what you already ruled out.

Especially in research, many "model problems" turn out to be data issues, indexing issues, leakage, or evaluation mismatches.

## Write for collaborators, not just for yourself

Even if you work alone today, research is collaborative over time. Your advisor, a labmate, a future student, or your future self may need to understand what you built.

That is why small communication practices matter:

- use descriptive variable and function names,
- keep functions reasonably focused,
- add short comments where the logic is not obvious,
- write `README` files for project setup and execution,
- include assumptions and caveats near the code that depends on them.

I do not think research code needs enterprise-level polish. But it should communicate intent clearly enough that another person can extend it without starting over.

## Testing is useful even in research code

People sometimes assume tests are only for production software. I do not think that is true.

Research code changes constantly, and that is exactly why a small amount of testing can be valuable. You do not need perfect coverage. Even a few targeted checks can prevent silent mistakes.

Examples of useful tests:

- a preprocessing function returns the expected columns,
- graph construction preserves node counts,
- train/validation/test splits do not overlap,
- metrics behave correctly on simple toy examples,
- a command-line script runs on a tiny sample dataset.

If a result is important enough to appear in a paper, some part of the pipeline is probably important enough to test.

## Don&apos;t optimize too early

Students without formal CS backgrounds sometimes feel pressure to "catch up" by immediately learning advanced tooling, distributed systems, or highly abstract software design.

Those things can be useful, but they are rarely the first bottleneck.

In most research settings, the bigger wins come from:

- cleaning the data,
- making runs reproducible,
- simplifying project structure,
- reducing manual steps,
- improving experiment tracking.

You can always learn more sophisticated engineering patterns later, once your workflow gives you a concrete reason to need them.

## Learning resources that punch above their weight

You do not need to learn everything from a full software engineering curriculum. A focused set of resources is often enough.

Here are the kinds of resources I found especially helpful:

- Princeton Research Computing
- Stanford Research Computing Tutorials and Related Links

## Final thought

If you come from a non-CS background, it is easy to feel behind. But in research, engineering is not a gatekeeping credential. It is a craft that supports thinking.

You do not need to become a software engineer before you can do serious computational research. You just need to gradually build a workflow that is kind to your future self.
