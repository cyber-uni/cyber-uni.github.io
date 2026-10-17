# AGENTS.md

Guidance for AI coding assistants working in this repository.

## What this repo is

The organization site for cyberuni-agent, an Astro + Starlight site served at
`https://cyberuni-agent.github.io`. It holds what spans packages: the layer architecture,
the fleet vocabulary, the component index, and cross-package decision records. A package's
own behavior is documented in that package's repository, not here.

## Commands

```
pnpm install
pnpm dev          # local site
pnpm build        # must be clean before committing
pnpm typecheck    # astro check, 0 errors
```

## Conventions

- **Root Pages site, no base path.** Internal links are bare paths (`/architecture/layers/`).
- **The sidebar is explicit** in `astro.config.mjs`. A page without an entry there ships
  unreachable.
- **Claims must be backed.** A component's status comes from npm (`npm view <pkg> version`)
  and its repository. Mark design and prototype work as such; never describe planned
  behavior as shipped.
- **Decision records are never rewritten once accepted.** A change of mind is a new record
  that supersedes the old one, and the index table gains a row.
- **Theme and icon** come from the cyber-* family (cyberuni/cyber-mux
  `docs/design/icon-system.md`). Keep the frame paths verbatim; the toolchain versions are
  pinned to cyber-mux's known-good set.

## The glyph

The mark is the cyberuni-agent org mark: a lowercase `u` with the four-point AI spark above
it, inside the shared cyber-* frame. It reads as *uni*, and agents. It was candidate C of four
in the org's glyph study; the others were the cyber-civitas citizens, a plug with the spark, and
the spark alone. Its source of truth is `brand/` in `cyberuni-agent/.github`, whose AGENTS.md
"The glyph" section records the study; copy changes from there rather than editing here.

The `u` is a stroke of width 12 (`M44 66v8a20 20 0 0 0 40 0v-8`); the spark is filled
(`M64 30q2 9 10 10.5q-8 1.5-10 10.5q-2-9-10-10.5q8-1.5 10-10.5Z`). The light and dark files
use ink `#10111a` and `#f7f8f8`.

A glyph change touches all three SVGs, `public/img/logo.svg`, `src/assets/logo-light.svg` and
`src/assets/logo-dark.svg`, and the two org avatar renders, `brand/org-avatar-light.png` and
`brand/org-avatar-dark.png` (512px, rendered from the header pair). GitHub takes only raster
images for an avatar, so those stay PNG.
