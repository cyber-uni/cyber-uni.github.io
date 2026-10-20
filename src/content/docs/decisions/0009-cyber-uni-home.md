---
title: "0009: The agent line moves to cyber-uni and keeps its cyber-* names"
description: "The GitHub org for the agent plugins is cyber-uni, the uni- prefix retires, and the marketplace catalog is named cyber-uni. Supersedes the uni- prefix in 0006, the org in 0008, and the catalog name in 0007."
---

**Status:** Accepted, 2026-10-20. Supersedes the `uni-` prefix in
[0006](/decisions/0006-uni-prefix-and-cyberuni-agent-home/), the org choice in
[0008](/decisions/0008-spikyuni-home/), and the catalog name in
[0007](/decisions/0007-spikyuni-marketplace/). The rest of 0007 stands, including the
catalog-only repository and the cyberplace rules.

## Context

[Decision 0006](/decisions/0006-uni-prefix-and-cyberuni-agent-home/) renamed the agent
plugins to `uni-*`, because `cyber-` reads as cybersecurity and the names followed three
patterns. [Decision 0008](/decisions/0008-spikyuni-home/) moved the org to spikyuni, and
[decision 0007](/decisions/0007-spikyuni-marketplace/) named the marketplace catalog
`spikyuni`.

No plugin has shipped under a `uni-*` name. The plugins ship under their cyber-* names:
cyberfleet, cyberlegion, cyber-mux, cyber-asana, cyber-figma, and the sdd, aced, and quill
plugins from cyber-sdd. Users have installed them under those names. Renaming every one
costs more than the misreading 0006 set out to avoid.

spikyuni does not match those names. cyber-uni does.

## Decision

- **The org is `cyber-uni`.** On 2026-10-20 it holds `cyber-agentkit`, `.github`,
  `marketplace`, and this site. The site is served at `https://cyber-uni.github.io`.
- **The `uni-` prefix retires for every plugin.** Each plugin keeps its cyber-* name and
  moves from cyberuni to cyber-uni over time under that name.
- **`uni-agent-kit` is `cyber-agentkit`** as package, command, and plugin, in
  `cyber-uni/cyber-agentkit`. It was `cyber-agent-harness` before 0006. The rename has not
  been released.
- **npm package names are unscoped cyber-* names.**
- **The marketplace catalog is renamed from `spikyuni` to `cyber-uni`.** Users add it with
  `/plugin marketplace add cyber-uni/marketplace` and install with
  `/plugin install <plugin>@cyber-uni`.
- **spikyuni stays** with `upx`, `cynapse`, and its own `.github`. The npm org `spikyuni`
  and the `@spikyuni` scope stay reserved.

Rejected:

| Option | Why not |
| --- | --- |
| Keeping `spikyuni` | Does not match the cyber-* names the packages ship under. |
| Keeping the `uni-` rename | Renaming packages that already ship and are installed costs more than the misreading it avoids. |
| Keeping the `spikyuni` catalog name | Does not match the org. The catalog is two days old, so the name is cheaper to change now than later. |

## Consequences

- Install docs change to `@cyber-uni`. An existing `@spikyuni` install must add the
  marketplace again. Few installs break, because the catalog was two days old.
- Links to `spikyuni.github.io` break. GitHub does not redirect a user or org Pages site.
  Every page and package link points to `cyber-uni` instead.
- The cybersecurity misreading that 0006 raised is accepted.
- The three naming patterns that 0006 listed remain: joined (`cyberfleet`), hyphenated
  (`cyber-mux`), and no prefix (`sdd`).
- The org returns to the `cyber*` naming family that 0008 stepped away from.
- `cyber-agentkit` was not on npm on 2026-10-20. The toolkit still ships as
  `@cyberuni/agent-harness` until the rename is released.
- cyberplace (`cyberuni/cyberplace`) stays as 0007 said.
- Decisions 0006, 0007, and 0008 keep their slugs, which name `cyberuni-agent` and
  `spikyuni`, because an accepted record is never rewritten.
