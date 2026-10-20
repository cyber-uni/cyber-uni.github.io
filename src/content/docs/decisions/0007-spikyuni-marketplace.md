---
title: "0007: The uni-* plugins are listed in a new spikyuni marketplace"
description: The uni-* plugins are listed in a catalog-only spikyuni/marketplace named spikyuni, and cyberplace keeps its current listings until each one is deprecated.
---

**Status:** Accepted, 2026-10-18. Numbered before [0008](/decisions/0008-spikyuni-home/)
but accepted after it, and relies on its org. The catalog name is superseded by
[0009](/decisions/0009-cyber-uni-home/): the catalog is now `cyber-uni`. The catalog-only
repository and the cyberplace rules stand.

## Context

[Decision 0006](/decisions/0006-uni-prefix-and-cyberuni-agent-home/) renames the agent
plugins to `uni-*`, and [decision 0008](/decisions/0008-spikyuni-home/) moves them to the
spikyuni org. Neither says which marketplace lists them. Today every plugin is listed in
`cyberuni/cyberplace`, which users add as a marketplace and install from as
`<plugin>@cyberplace`.

cyberplace does not fit the `uni-*` line:

- It is a full monorepo with its own packages, plugins, skills, and research, not only a
  catalog.
- Its catalog lists the `buddy-*` line and repobuddy, which decision 0006 keeps in repobuddy,
  next to the `cyber-*` plugins that are being renamed.
- The name after the `@` comes from the catalog's `name` field, not from the repository.
  Moving or renaming cyberplace would break every install that names `@cyberplace`.

## Decision

- **A new repository, `spikyuni/marketplace`, holds only the marketplace catalogs** for
  Claude Code, Codex, GitHub Copilot CLI, and Cursor. It lists only the `uni-*` line.
- **The catalog is named `spikyuni`,** after the org that publishes the plugins. Users add
  it with `/plugin marketplace add spikyuni/marketplace` and install with
  `/plugin install <plugin>@spikyuni`, for example `uni-agent-kit@spikyuni`.
- **A plugin joins `spikyuni` when it ships under its `uni-*` name.** `uni-agent-kit` is
  first.
- **cyberplace stays where it is.** It keeps listing the `buddy-*` line and each old
  `cyber-*` name until that plugin is deprecated, then drops the entry.

Rejected:

| Option | Why not |
| --- | --- |
| Transfer cyberplace to spikyuni | Brings an unrelated monorepo into the agent org, and mixes the `buddy-*` line into it. |
| Rename cyberplace's catalog | Breaks every existing `@cyberplace` install. |
| Name the catalog `uni` | Short and generic, so more likely to clash with a catalog a user already has. A user can register only one marketplace per name. |
| Name the catalog `marketplace` | Too generic after the `@`: `uni-agent-kit@marketplace` does not say whose it is. |
| Name the catalog `cyber-civitas` | Decision 0006 retired the brand, civitas names the design rather than the publisher, and `cyber-` reads as cybersecurity. |
| List only in claude-plugins-official | Covers one harness, and the listing is not in place yet. |

## Consequences

- Each plugin's install docs change to `@spikyuni` when it ships under its `uni-*` name,
  not before.
- For a while a user can find the same plugin under its old name in cyberplace and its new
  name in `spikyuni`. The old entry points at the deprecated package.
- Claude Code accepts `spikyuni`: it is not on the
  [reserved names](https://code.claude.com/docs/en/plugins/marketplace-reference#reserved-names)
  list, checked 2026-10-18. Codex, GitHub Copilot CLI, and Cursor have not been checked;
  adding the catalog in each one when the repository is created is the check.
- Cheap to change: the repository's name. Expensive to change: the `spikyuni` catalog name,
  once users have installed from it.
