export default interface Props {
  image: string;
  name: string;
  kind: 'Movie' | 'TV' | 'Anime' | 'Documentary' | 'Short' | 'Music Video';
  description: string;
  genres: string[];
  year: number;
  age: string;
  rate: number;
}
