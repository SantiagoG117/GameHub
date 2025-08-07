import { Platforms } from "@/entities/Platforms";

export interface Games {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  description_raw: string;
  // the type of parent_platforms is an array of objects, where each object has a signle property of type Platform
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
  rating_top: number;
}
