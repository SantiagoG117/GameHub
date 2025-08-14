export interface Trailers {
  id: number;
  name: string;
  preview: string; //URL of the poster of the video
  data: {
    480: string;
    max: string;
  };
}
