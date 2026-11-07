import type { MetadataRoute } from "next";
import { projectDetails } from "@/lib/project-details";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.romainbeka.fr/" }, ...projectDetails.map(({ slug }) => ({ url: `https://www.romainbeka.fr/projets/${slug}` }))];
}
