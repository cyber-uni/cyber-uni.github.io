---
title: About cyber-uni
description: The organization behind the cyber-* agent plugins, what it holds today, and where to get the plugins.
---

cyber-uni is the GitHub organization for unional's line of AI coding agent plugins. The
plugins are designed to work across agent harnesses, such as Claude Code, Cursor, Codex,
and GitHub Copilot CLI.

The plugins follow one design, [civitas](/civitas/): the layers, vocabulary, and rules that
let separate packages fit together. This organization publishes the packages; civitas is
how they are designed.

## What it holds today

[Decision 0009](/decisions/0009-cyber-uni-home/) made cyber-uni the home of the agent line.
On 2026-10-20 it holds:

- [`cyber-agentkit`](https://github.com/cyber-uni/cyber-agentkit), the toolkit for working
  across agent harnesses, with its
  [documentation](https://cyber-uni.github.io/cyber-agentkit/). The rename to
  `cyber-agentkit` has not been released: it still ships on npm as
  `@cyberuni/agent-harness`.
- [`marketplace`](https://github.com/cyber-uni/marketplace), the plugin catalog.
- [this site](https://github.com/cyber-uni/cyber-uni.github.io).
- [`.github`](https://github.com/cyber-uni/.github), the organization profile and brand.

The other plugins live in [cyberuni](https://github.com/cyberuni). Each one moves here over
time under the cyber-* name it ships under today.

## Where to get the plugins

Add the marketplace, then install a plugin from it. In Claude Code:

```
/plugin marketplace add cyber-uni/marketplace
/plugin install <plugin>@cyber-uni
```

The [marketplace repository](https://github.com/cyber-uni/marketplace) covers the other
harnesses. If you installed from the earlier `spikyuni` catalog, add the marketplace again
under its new name.

[Components](/components/) lists every package with its repository and its status.

## What stays elsewhere

- **spikyuni** keeps [`upx`](https://github.com/spikyuni/upx),
  [`cynapse`](https://github.com/spikyuni/cynapse), and its own `.github`. The npm
  `@spikyuni` scope stays reserved.
- **cyberuni** stays the home of the non-agentic libraries and the YouTube channel.
- **cyberplace** (`cyberuni/cyberplace`) stays as
  [decision 0007](/decisions/0007-spikyuni-marketplace/) set out.
- **The buddy-\* plugins** stay in repobuddy, unchanged.
- **truss**, the convergence design, keeps its own repository and
  [documentation](https://cyberuni.github.io/cyber-truss/).

## The names

The agent line was first branded cyber-arcology, then cyber-civitas. Decision 0006 retired
both brands, chose the `uni-` prefix for the plugins, and chose cyberuni-agent for the
organization. [Decision 0008](/decisions/0008-spikyuni-home/) replaced cyberuni-agent with
spikyuni. [Decision 0009](/decisions/0009-cyber-uni-home/) moved the line to cyber-uni and
retired the `uni-` prefix before any plugin shipped under it. The plugins keep their cyber-*
names, and the org name now matches them. The design idea kept its name: it is civitas.
