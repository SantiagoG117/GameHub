export interface FetchedData<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[]; //The type of results will be converted to an array of T
}
