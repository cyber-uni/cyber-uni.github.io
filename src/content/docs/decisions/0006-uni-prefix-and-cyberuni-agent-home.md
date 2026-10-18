---
title: "0006: Agent plugins take the uni- prefix and live in cyberuni-agent"
description: The agent plugins are published as uni-* from a cyberuni-agent GitHub org and npm scope, replacing the cyber-* prefix and the cyber-civitas and cyber-arcology brands.
---

**Status:** Accepted, 2026-10-17. The org choice is superseded by
[0008](/decisions/0008-spikyuni-home/): the home is now `spikyuni`. The `uni-` prefix stands.

## Context

The agent plugins are headed for claude-plugins-official, where a user sees the plugin
name first and its publisher second. The current names do not hold up there:

- They follow three patterns: joined (`cyberfleet`, `cyberlegion`), hyphenated
  (`cyber-asana`, `cyber-mux`, `cyber-sdd`), and no prefix (`sdd`, `aced`, `quill`).
- In a plugin directory, `cyber-` reads as cybersecurity. `cyber-asana` looks like a
  security tool for Asana.
- The tool connectors will sit next to the vendors' own Asana, Figma, and Slack plugins.
  They need a prefix that sets them apart without implying the vendor made them.
- The work carries three umbrella names: cyberuni, cyber-civitas, and cyber-arcology.
  The agent repositories live in the cyberuni GitHub org, cyber-civitas holds only this
  site and `upx`, and cyber-arcology is empty.

cyberuni also hosts the non-agentic libraries and is linked to a YouTube channel, so it
stays as it is.

## Decision

- **Plugin names take the `uni-` prefix:** `uni-fleet`, `uni-legion`, `uni-sdd`,
  `uni-mux`, `uni-asana`, `uni-figma`, `uni-slack`, `uni-research`. The prefix ties to
  unional and to the line's main claim: every plugin works across harnesses.
- **The home is `cyberuni-agent`,** as both the GitHub org and the npm owner. It ties
  back to cyberuni, and the suffix keeps the agent line apart from the libraries.
- **Packages are unscoped.** Plugin name, npm package, and repository match:
  `uni-fleet` lives in `cyberuni-agent/uni-fleet`. The org owns the packages.
- **cyberuni stays** the home of the YouTube channel and the non-agentic libraries.
- **The buddy-* line stays** in repobuddy, unchanged.
- **cyber-civitas and cyber-arcology retire as brands.** This site's content moves to
  cyberuni-agent; the citizens glyph may carry over as the agent line's mark.

Rejected, with the state checked on 2026-10-17:

| Option | Why not |
| --- | --- |
| `uni` org | Taken on GitHub and npm. |
| `uni-agent`, `unimata`, `unimaton` | Held by others on GitHub; npm scopes exist. |
| `unional-ai` | The npm scope is held. |
| `-ai` suffix | Likely to date. |
| `-si` suffix | Ambiguous: system integrator, metric units, Slovenia. |
| `p-lab` | Reads as experimental, and the name says nothing. |
| `neo-*` (`neo-a`, `neo-agent`) | No tie to unional; a common prefix. |
| Keeping `cyber-*` | Reads as cybersecurity. |

## Consequences

- The cyberuni-agent GitHub org must be created through the web UI, and the npm org needs
  an npm login. Both names were free on 2026-10-17 and are not reserved.
- The `uni-*` npm names above were free on 2026-10-17.
- Not every plugin is renamed. Coined names that already stand alone keep their names.
- The `cyber-agent-harness` plugin becomes `uni-agent-kit`. It is less a harness than a
  toolkit for agent configuration: harness detection and queries, plus layered reference
  documents. `uni-harness` was taken.
- Still open: whether `unional-agent`, created on GitHub on 2026-10-17, is kept as a
  placeholder or deleted.
- Converting the npm user `@unional` into an org is not needed for this decision.
- The old npm names and marketplace entries are not deprecated yet.
- Expensive to undo: the plugin names, once listed in claude-plugins-official. Cheap to
  change: where this site's content ends up.
