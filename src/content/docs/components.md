---
title: Components
description: Every package in the agent line, its job, its status, and where it lives.
---

Status as of October 2026. "Published" means on npm; "design" means the model is written and
the code is not.

Each package goes by the name it ships under
([decision 0009](/decisions/0009-cyber-uni-home/)). `cyber-agentkit` still ships as
`@cyberuni/agent-harness` until its rename is released.

The Layer column places each package in the [civitas layers](/civitas/layers/).

| Package | Layer | Job | Status |
| --- | --- | --- | --- |
| [cyberfleet](https://github.com/cyberuni/cyberfleet) | Product | Operator, Captains, and Pods directing work across projects | published 0.5 |
| [cyberlegion](https://github.com/cyberuni/cyberlegion) | Runtime | Spawn, supervise, and nudge agent sessions over the filesystem | published 1.5 |
| [cyber-mux](https://github.com/cyberuni/cyber-mux) | Runtime | Pane control across tmux, herdr, WezTerm, Zellij, and more | published 0.10 |
| [drover](https://github.com/cyberuni/drover) | Runtime | Terminal workspace manager for AI coding agents, a fork of herdr | fork, rename in progress |
| [cynapse](https://github.com/spikyuni/cynapse) | Communication | Persisted channels for agents, and the Cortex viewer | published 0.1 |
| [cyber-truss](https://github.com/cyberuni/cyber-truss) | Process | Holds a repository in its settled state across every change | design |
| [cyber-sdd](https://github.com/cyberuni/cyber-sdd) | Process | Spec-Driven Development, with the ACED and Quill plugins | published 0.6 |
| [cyber-asana](https://github.com/cyberuni/cyber-asana) | Store | Asana CLI, skills, and MCP server for agents | published 0.21 |
| [cyber-slack](https://github.com/cyberuni/cyber-slack) | Store | Slack CLI and MCP server for agents | published 0.1 |
| [cyber-figma](https://github.com/cyberuni/cyber-figma) | Store | Figma CLI, MCP server, and plugin for agents | published 0.1 |
| [dna](https://github.com/cyberuni/dna) | Model | Datum Network Architecture: identity, types, and relations across stores | draft spec |
| [cyber-agentkit](https://github.com/cyber-uni/cyber-agentkit) | Foundation | Toolkit for working across agent harnesses | published 0.7 as `@cyberuni/agent-harness` |
| [universal-plugin](https://github.com/cyberuni/universal-plugin) | Foundation | One plugin manifest, generated for every harness | published 0.15 |

Most repositories live in [cyberuni](https://github.com/cyberuni) and move to
[cyber-uni](https://github.com/cyber-uni) over time under the same names. cyber-uni holds
`cyber-agentkit`, the marketplace, and this site. [spikyuni](https://github.com/spikyuni)
holds `cynapse` and `upx`.
