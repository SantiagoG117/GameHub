/* 
    rawg API supports cropping images on the fly by simply adding the word crop after media/ in the image url and specifying
    the width and height of the image.
        Example: https://api.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg

    This functionality allow us to optimize images that are too big for our needs.
*/

const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length; // Get the index of the end of the media/ string

  if (index === -1) return url; // If media/ is not found, return the original URL

  return (
    url.slice(0, index) + "crop/600/400/" + url.slice(index) //Get the remaining characters of the URL
  );
};

export default getCroppedImageUrl;
