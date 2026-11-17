import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.name,
        short_name: siteConfig.author,
        description: siteConfig.description,
        start_url: "/",
        display: "standalone",
        background_color: "#030014",
        theme_color: "#030014",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
export { siteConfig };
