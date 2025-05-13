export interface Response<T> {
  error: boolean | null;
  code: string | number | null;
  message: string | null;
  data?: T;
}
