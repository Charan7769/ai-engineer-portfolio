import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projectsData } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "",
        "/blog",
        "/projects",
    ].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Dynamic projects routes
    const projectRoutes = projectsData.map((project) => ({
        url: `${siteConfig.url}/projects/${project.slug}`,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    // Dynamic blog routes
    const blogRoutes = ["my-first-post", "another-post"].map((slug) => ({
        url: `${siteConfig.url}/blog/${slug}`,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...routes, ...projectRoutes, ...blogRoutes];
}
