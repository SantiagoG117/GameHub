import useData from "./useData";
import { Platforms } from "./useGames";

const usePlatforms = () => useData<Platforms>("/platforms/lists/parents");

export default usePlatforms;
