import { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { publishedProjects } from "@/data/projects";
import { publishedBlogPosts } from "@/data/blog";

/**
 * Only absolute URLs are valid in a sitemap. When no production origin is
 * configured the sitemap is empty rather than advertising a localhost address.
 * Draft projects and sample blog posts are never listed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date().toISOString().split("T")[0];

    const staticPaths = ["/", "/projects"];
    if (publishedBlogPosts.length > 0) staticPaths.push("/blog");

    const routes = staticPaths.flatMap((path) => {
        const url = absoluteUrl(path);
        return url
            ? [
                  {
                      url,
                      lastModified,
                      changeFrequency: "monthly" as const,
                      priority: path === "/" ? 1 : 0.8,
                  },
              ]
            : [];
    });

    const projectRoutes = publishedProjects.flatMap((project) => {
        const url = absoluteUrl(`/projects/${project.slug}`);
        return url
            ? [
                  {
                      url,
                      lastModified,
                      changeFrequency: "monthly" as const,
                      priority: 0.6,
                  },
              ]
            : [];
    });

    // Sample blog articles are excluded until a real write-up is published.
    const blogRoutes = publishedBlogPosts.flatMap((post) => {
        const url = absoluteUrl(`/blog/${post.slug}`);
        return url
            ? [
                  {
                      url,
                      lastModified,
                      changeFrequency: "monthly" as const,
                      priority: 0.6,
                  },
              ]
            : [];
    });

    return [...routes, ...projectRoutes, ...blogRoutes];
}
