---
title: "0010: The cyber-uni catalog lists each plugin under the name it ships"
description: "A plugin is listed in the cyber-uni marketplace under the name and source it ships from today. Supersedes the rule in 0007 that a plugin joins once it ships under its uni-* name."
---

**Status:** Accepted, 2026-10-20. Supersedes the rule in
[0007](/decisions/0007-spikyuni-marketplace/) that a plugin joins the catalog when it ships
under its `uni-*` name. The rest of 0007 stands, as amended by
[0009](/decisions/0009-cyber-uni-home/).

## Context

[Decision 0007](/decisions/0007-spikyuni-marketplace/) said a plugin joins the catalog when
it ships under its `uni-*` name. [Decision 0009](/decisions/0009-cyber-uni-home/) retired
the `uni-` prefix, so that event never happens.

The catalog already lists every plugin of the line under the name it ships today, such as
cyberfleet, cyber-mux, and the sdd plugins, each pointing at its current repository.

## Decision

- **The cyber-uni catalog lists each plugin under the name and source it ships from
  today.** A plugin does not need a rename or a move to cyber-uni to be listed.
- **When a plugin's repository moves to cyber-uni,** its entry's source changes to the new
  repository. Its name stays.

Rejected:

| Option | Why not |
| --- | --- |
| Keeping 0007's rule | It waits for a `uni-*` release that will not happen. |
| Listing a plugin only once its repository is in cyber-uni | Drops plugins the catalog lists today and that users install from it. |

## Consequences

- The catalog does not change.
- 0007 kept cyberplace listing each old name until that plugin is deprecated. No plugin
  is renamed, so none is deprecated for that reason, and cyberplace and cyber-uni list the
  same plugins under the same names.
