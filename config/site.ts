import { env } from "@/env.mjs";
import { SiteConfig } from "types"

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "SaaSter",
  description:
    "Get your project off to an explosive start with SaaSter! Harness the power of Next.js 14, Prisma, Planetscale, Auth.js, Resend, React Email, Shadcn/ui and Stripe to build your next big thing.",
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  links: {
    twitter: "https://twitter.com/tswwws",
    github: "https://github.com/eben92/saaster",
  },
  mailSupport: "support@saas-starter.com"
}
