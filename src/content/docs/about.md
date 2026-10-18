---
title: About spikyuni
description: The organization behind the uni-* agent plugins, what it holds today, and where to get the plugins.
---

spikyuni is the GitHub organization and npm owner for unional's line of AI coding
agent plugins. The plugins are designed to work across agent harnesses, such as Claude Code,
Cursor, Codex, and GitHub Copilot CLI.

The plugins follow one design, [civitas](/civitas/): the layers, vocabulary, and rules that
let separate packages fit together. This organization publishes the packages; civitas is
how they are designed.

## What it holds today

[Decision 0006](/decisions/0006-uni-prefix-and-cyberuni-agent-home/) gave the agent line its
own organization, and [decision 0008](/decisions/0008-spikyuni-home/) made it spikyuni. Today it holds:

- [this site](https://github.com/spikyuni/spikyuni.github.io),
- [`upx`](https://github.com/spikyuni/upx),
- [`.github`](https://github.com/spikyuni/.github), the organization profile and
  brand.

The agent plugins are moving here under `uni-*` names, for example `uni-fleet`,
`uni-legion`, and `uni-sdd`. No rename has shipped yet: each plugin still lives in
[cyberuni](https://github.com/cyberuni) under its old name.

## Where to get the plugins

[Components](/components/) lists every package with the name it goes by today, its
repository, and its status. Install a plugin from its repository's instructions, under the
name in the "Name today" column. Once a plugin moves, its package, plugin name, and
repository all take the same `uni-*` name, for example `spikyuni/uni-fleet`.

## What stays elsewhere

- **cyberuni** stays the home of the non-agentic libraries and the YouTube channel.
- **The buddy-\* plugins** stay in repobuddy, unchanged.
- **truss**, the convergence design, keeps its own repository and
  [documentation](https://cyberuni.github.io/cyber-truss/).

## The names

The agent line was first branded cyber-arcology, then cyber-civitas. Decision 0006 retired
both brands and chose cyberuni-agent for the organization.
[Decision 0008](/decisions/0008-spikyuni-home/) replaced cyberuni-agent with spikyuni: one
word, easy to say. The design idea kept its name: it is civitas.
