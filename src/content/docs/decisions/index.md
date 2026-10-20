---
title: Decisions
description: Decisions that span more than one package, from the civitas rules to the names the packages take.
---

These records hold the rules no single package can decide alone. A decision inside one
package stays in that package's own `docs/adr/` and cites these where it relies on them.

Records 0001 to 0005 are rules of the [civitas](/civitas/) design. Records 0006 to 0009 are
about the organization: the names the packages take, where they live, and where they are
listed.

An accepted record is never rewritten. A change of mind is a new record that supersedes
the old one.

| Record | Decision | Status |
| --- | --- | --- |
| [0001](/decisions/0001-runtime-depends-on-communication/) | The runtime depends on communication, never the reverse | Accepted |
| [0002](/decisions/0002-claims-and-leases/) | Coordination claims live in cynapse; leases and presence live in the runtime | Accepted |
| [0003](/decisions/0003-worktrees-through-the-runtime/) | cyber-mux worktrees are reached only through the runtime's workspace adapter | Accepted |
| [0004](/decisions/0004-opaque-service-keys/) | Runtime services take opaque keys; project addressing lives in cynapse | Accepted |
| [0005](/decisions/0005-foundation-depends-on-no-agent-layer-package/) | The foundation depends on no agent-layer package | Accepted |
| [0006](/decisions/0006-uni-prefix-and-cyberuni-agent-home/) | Agent plugins take the uni- prefix and live in cyberuni-agent | Accepted; org superseded by 0008, then 0009; prefix superseded by 0009 |
| [0007](/decisions/0007-spikyuni-marketplace/) | The uni-* plugins are listed in a new spikyuni marketplace | Accepted; catalog name superseded by 0009 |
| [0008](/decisions/0008-spikyuni-home/) | The agent line moves to spikyuni | Accepted; org superseded by 0009 |
| [0009](/decisions/0009-cyber-uni-home/) | The agent line moves to cyber-uni and keeps its cyber-* names | Accepted |
