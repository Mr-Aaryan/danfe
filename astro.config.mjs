import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://danfe.pages.dev",
  image: {
    domains: ["images.unsplash.com"]
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    fallback: {
      fr: "en"
    },
    routing: {
      prefixDefaultLocale: false
    }
  },
  prefetch: true,
  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: "en",
      // All urls that don't contain `fr` after `https://screwfast.uk/` will be treated as default locale, i.e. `en`
      locales: {
        en: "en",
        // The `defaultLocale` value must present in `locales` keys
        fr: "fr"
      }
    }
  }), compressor({
    gzip: false,
    brotli: true
  })],
  output: "hybrid",
  experimental: {
    clientPrerender: true,
    directRenderScript: true
  },
  adapter: cloudflare()
});