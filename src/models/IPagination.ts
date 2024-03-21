export interface IPaginations<T> {
    current_page: number;
    data: T[];
    last_page: number;
    total: number;
  }
  