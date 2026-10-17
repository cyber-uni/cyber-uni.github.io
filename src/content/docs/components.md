---
title: Components
description: Every package in the agent line, its job, its status, and the name it goes by today.
---

Status as of October 2026. "Published" means on npm; "design" means the model is written and
the code is not.

The agent plugins are moving to `uni-*` names
([decision 0006](/decisions/0006-uni-prefix-and-cyberuni-agent-home/)). No rename has
shipped yet: each package still goes by the name in the "Name today" column, and its
repository is still in cyberuni. cynapse and universal-plugin keep their names.

The Layer column places each package in the [civitas layers](/civitas/layers/).

| Package | Name today | Layer | Job | Status |
| --- | --- | --- | --- | --- |
| [uni-fleet](https://github.com/cyberuni/cyberfleet) | `cyberfleet` | Product | Operator, Captains, and Pods directing work across projects | published 0.5 |
| [uni-legion](https://github.com/cyberuni/cyberlegion) | `cyberlegion` | Runtime | Spawn, supervise, and nudge agent sessions over the filesystem | published 1.5 |
| [uni-mux](https://github.com/cyberuni/cyber-mux) | `cyber-mux` | Runtime | Pane control across tmux, herdr, WezTerm, Zellij, and more | published 0.10 |
| [drover](https://github.com/cyberuni/drover) | `drover` | Runtime | Terminal workspace manager for AI coding agents, a fork of herdr | fork, rename in progress |
| [cynapse](https://github.com/cyberuni/cynapse) | `cynapse` | Communication | Persisted channels for agents, and the Cortex viewer | published 0.1 |
| [uni-truss](https://github.com/cyberuni/cyber-truss) | `cyber-truss` | Process | Holds a repository in its settled state across every change | design |
| [uni-sdd](https://github.com/cyberuni/cyber-sdd) | `cyber-sdd` | Process | Spec-Driven Development, with the ACED and Quill plugins, moving to uni-aced and uni-quill | published 0.6 |
| [uni-asana](https://github.com/cyberuni/cyber-asana) | `cyber-asana` | Store | Asana CLI, skills, and MCP server for agents | published 0.21 |
| [uni-slack](https://github.com/cyberuni/cyber-slack) | `cyber-slack` | Store | Slack CLI and MCP server for agents | published 0.1 |
| [uni-figma](https://github.com/cyberuni/cyber-figma) | `cyber-figma` | Store | Figma CLI, MCP server, and plugin for agents | published 0.1 |
| [dna](https://github.com/cyberuni/dna) | `dna` | Model | Datum Network Architecture: identity, types, and relations across stores | draft spec |
| [uni-agent-kit](https://github.com/cyberuni/agent-harness) | `@cyberuni/agent-harness` | Foundation | Toolkit for working across agent harnesses | published 0.7 |
| [universal-plugin](https://github.com/cyberuni/universal-plugin) | `universal-plugin` | Foundation | One plugin manifest, generated for every harness | published 0.15 |

The repositories live in [cyberuni](https://github.com/cyberuni). The
[cyberuni-agent](https://github.com/cyberuni-agent) organization holds this site and `upx`.
