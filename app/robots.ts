import { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";

/**
 * The sitemap reference is emitted only when a production origin is configured,
 * so robots.txt never advertises a localhost sitemap.
 */
export default function robots(): MetadataRoute.Robots {
    const sitemapUrl = absoluteUrl("/sitemap.xml");

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/api/",
        },
        ...(sitemapUrl ? { sitemap: sitemapUrl } : {}),
    };
}
