---
title: "0008: The agent line moves to spikyuni"
description: The GitHub org for the uni-* agent plugins is spikyuni, replacing cyberuni-agent. Supersedes the org choice in decision 0006; the uni- prefix stands.
---

**Status:** Accepted, 2026-10-17. Supersedes the org choice in
[0006](/decisions/0006-uni-prefix-and-cyberuni-agent-home/). The rest of 0006, including
the `uni-` prefix, stands.

## Context

[Decision 0006](/decisions/0006-uni-prefix-and-cyberuni-agent-home/) made `cyberuni-agent`
the GitHub org and npm owner for the agent plugins. The name held up poorly in use:

- It is two words joined by a hyphen. People misorder it or cut it short.
- It is hard to say aloud.

The goal was one word in the vein of `superuni`, which is taken on GitHub.

## Decision

- **The org is `spikyuni`.** It is one word and easy to say. It carries an image, a
  unicorn's spiky horn, which gives the line a mascot. It keeps `uni`, so it still ties to
  unional and to cyberuni.
- **All four repositories move:** `.github`, `uni-agent-kit`, `upx`, and this site. The
  site is served at `https://spikyuni.github.io`. The old `cyberuni-agent.github.io` URLs
  do not redirect.
- **npm package names do not change.** `@cyberuni/agent-harness` and `@repobuddy/upx`
  keep their names; only their repository and homepage links move.
- **The npm org `spikyuni` exists,** owned by unional. The `@spikyuni` scope is reserved
  for future packages.

Rejected:

| Option | Why not |
| --- | --- |
| `superuni` | Taken on GitHub. |
| `hyperuni`, `turbouni` | Free, but generic. |
| `peakuni` | Can read as "peak university". |
| `nieruni` | A NieR: Automata reference, but hard to read run together. |
| `uni-pod` | NieR's support Pods are an apt image, but the name needs a hyphen. |
| `pooruni` | Reads badly. |
| Keeping `cyberuni-agent` | Hard to say and easy to misorder. |

Other candidates were already taken.

## Consequences

- The name does not say "agent". The repositories and packages carry that.
- The org steps away from the `cyber*` naming family.
- Links to `cyberuni-agent.github.io` break. Every page and package link points to
  `spikyuni` instead.
- Decision 0006's URL keeps its `cyberuni-agent-home` slug, because an accepted record is
  never rewritten.
