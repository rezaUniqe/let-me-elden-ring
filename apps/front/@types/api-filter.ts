export interface ApiFilter {
  currentPage: number;
  limit: number;
  name?: string;
  setTotalPages: (total: number) => void;
}
