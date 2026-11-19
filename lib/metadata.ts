import { Metadata } from "next";
import { absoluteUrl, siteConfig, siteUrl } from "@/config/site";

/**
 * Builds page metadata.
 *
 * `metadataBase` and the canonical/Open Graph URLs are only emitted when a
 * production origin is configured. Without one, no absolute URL is invented and
 * no localhost address is published; relative asset paths are left as-is.
 */
export function constructMetadata({
    title = siteConfig.title,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    path,
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    /** Route this metadata describes, used for the canonical and og:url. */
    path?: string;
    noIndex?: boolean;
} = {}): Metadata {
    const canonical = path ? absoluteUrl(path) : undefined;
    // An Open Graph image URL must be absolute. When no production origin is
    // configured the images are omitted rather than letting Next resolve the
    // relative path against its internal placeholder base (http://localhost:0).
    const imageUrl = absoluteUrl(image);

    return {
        title,
        description,
        ...(canonical ? { alternates: { canonical } } : {}),
        openGraph: {
            title,
            description,
            siteName: siteConfig.name,
            ...(canonical ? { url: canonical } : {}),
            ...(imageUrl
                ? {
                      images: [
                          {
                              url: imageUrl,
                              alt: `${siteConfig.name} — ${siteConfig.title}`,
                          },
                      ],
                  }
                : {}),
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            ...(imageUrl ? { images: [imageUrl] } : {}),
        },
        icons: {
            icon: "/favicon.ico",
        },
        ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
