import { Platforms } from "@/entities/Platforms";
import { Genres } from "./Genres";
import { Publishers } from "./Publishers";

export interface Games {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  genres: Genres[];
  publishers: Publishers[];
  description_raw: string;
  // the type of parent_platforms is an array of objects, where each object has a signle property of type Platform
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
  rating_top: number;
}
