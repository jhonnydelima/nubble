export interface MetaDataPageAPI {
  total: number; // 24;
  per_page: number; // 10;
  current_page: number; // 1;
  last_page: number; // 3;
  first_page: number; // 1;
  first_page_url: string; // '/?page=1';
  last_page_url: string; // '/?page=3';
  next_page_url: string | null; // '/?page=2';
  previous_page_url: string | null; // null;
}

/**
 * @description This interface is used to define the structure of the API response for paginated data.
 * It includes metadata about the pagination and the actual data array.
 * @template Data - Type of the data in the response.
 */
export interface PageAPI<Data> {
  meta: MetaDataPageAPI;
  data: Data[];
}
