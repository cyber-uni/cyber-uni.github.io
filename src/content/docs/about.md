---
title: About cyberuni-agent
description: The organization behind the uni-* agent plugins, what it holds today, and where to get the plugins.
---

cyberuni-agent is the GitHub organization and npm owner for unional's line of AI coding
agent plugins. The plugins are designed to work across agent harnesses, such as Claude Code,
Cursor, Codex, and GitHub Copilot CLI.

The plugins follow one design, [civitas](/civitas/): the layers, vocabulary, and rules that
let separate packages fit together. This organization publishes the packages; civitas is
how they are designed.

## What it holds today

[Decision 0006](/decisions/0006-uni-prefix-and-cyberuni-agent-home/) made this organization
the home of the agent line. Today it holds:

- [this site](https://github.com/cyberuni-agent/cyberuni-agent.github.io),
- [`upx`](https://github.com/cyberuni-agent/upx),
- [`.github`](https://github.com/cyberuni-agent/.github), the organization profile and
  brand.

The agent plugins are moving here under `uni-*` names, for example `uni-fleet`,
`uni-legion`, and `uni-sdd`. No rename has shipped yet: each plugin still lives in
[cyberuni](https://github.com/cyberuni) under its old name.

## Where to get the plugins

[Components](/components/) lists every package with the name it goes by today, its
repository, and its status. Install a plugin from its repository's instructions, under the
name in the "Name today" column. Once a plugin moves, its package, plugin name, and
repository all take the same `uni-*` name, for example `cyberuni-agent/uni-fleet`.

## What stays elsewhere

- **cyberuni** stays the home of the non-agentic libraries and the YouTube channel.
- **The buddy-\* plugins** stay in repobuddy, unchanged.
- **truss**, the convergence design, keeps its own repository and
  [documentation](https://cyberuni.github.io/cyber-truss/).

## The names

The agent line was first branded cyber-arcology, then cyber-civitas. Decision 0006 retired
both brands and chose cyberuni-agent for the organization. The design idea kept its name:
it is civitas.
