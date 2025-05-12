export interface ImageData {
  id: number;
  alt_description: string;
  description: string | null;
  likes: number;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
}
