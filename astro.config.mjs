// @ts-check
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// This is the org's root Pages site (`<org>.github.io`), so it is served at `/` and needs no
// `base`. Internal links in content are bare paths (`/civitas/layers/`).
export default defineConfig({
  site: "https://cyber-uni.github.io",
  // The civitas pages moved under /civitas/; the old paths keep working.
  redirects: {
    "/what-is": "/civitas/",
    "/architecture/layers": "/civitas/layers/",
    "/architecture/independent-use": "/civitas/independent-use/",
    "/architecture/vocabulary": "/civitas/vocabulary/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: "cyber-uni",
      description:
        "The organization behind the cyber-* AI coding agent plugins, and civitas, the design they follow.",
      // The cyber-* family mark: the shared command reticle around a per-package glyph
      // (cyberuni/cyber-mux docs/design/icon-system.md). The favicon self-themes; the header
      // logo ships as a light/dark pair because this site picks its theme by `data-theme`,
      // which `prefers-color-scheme` never sees.
      favicon: "/img/logo.svg",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        alt: "cyber-uni",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/cyber-uni",
        },
      ],
      customCss: ["./src/styles/global.css"],
      editLink: {
        baseUrl:
          "https://github.com/cyber-uni/cyber-uni.github.io/edit/main/",
      },
      sidebar: [
        {
          label: "cyber-uni",
          items: [
            { label: "About the org", slug: "about" },
            { label: "Components", slug: "components" },
          ],
        },
        {
          label: "Civitas",
          items: [
            { label: "What is civitas", slug: "civitas" },
            { label: "Layers", slug: "civitas/layers" },
            { label: "Using parts on their own", slug: "civitas/independent-use" },
            { label: "Fleet vocabulary", slug: "civitas/vocabulary" },
          ],
        },
        {
          label: "Decisions",
          items: [
            { label: "Overview", slug: "decisions" },
            { label: "0001 Runtime depends on communication", slug: "decisions/0001-runtime-depends-on-communication" },
            { label: "0002 Claims and leases", slug: "decisions/0002-claims-and-leases" },
            { label: "0003 Worktrees through the runtime", slug: "decisions/0003-worktrees-through-the-runtime" },
            { label: "0004 Opaque service keys", slug: "decisions/0004-opaque-service-keys" },
            { label: "0005 Foundation depends on no agent layer", slug: "decisions/0005-foundation-depends-on-no-agent-layer-package" },
            { label: "0006 uni- prefix and cyberuni-agent home", slug: "decisions/0006-uni-prefix-and-cyberuni-agent-home" },
            { label: "0007 The spikyuni marketplace", slug: "decisions/0007-spikyuni-marketplace" },
            { label: "0008 Move to spikyuni", slug: "decisions/0008-spikyuni-home" },
            { label: "0009 Move to cyber-uni", slug: "decisions/0009-cyber-uni-home" },
            { label: "0010 Catalog lists shipped names", slug: "decisions/0010-catalog-lists-shipped-names" },
          ],
        },
      ],
    }),
  ],
});
