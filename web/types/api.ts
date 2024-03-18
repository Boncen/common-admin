export interface Result<T = any> {
  status: number;
  message: string;
  data?: T;
}

export interface SearchModel {
  searchText?: string;
  sort?: string;
  asc?: false;
}

export interface PageSearchModel extends SearchModel {
  pageIndex: number;
  pageSize: number;
}

export interface PageResult<T = any> {
  pageIndex: number;
  pageSize: number;
  list: Array<T>;
  total?: number;
}
