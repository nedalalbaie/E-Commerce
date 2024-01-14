export type List<T> = {
  current_page: number;
  total: number; // totalPages 
  per_page: number; // totalRecords
  data: T
}
