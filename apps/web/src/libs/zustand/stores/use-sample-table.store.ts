import { applyMiddlewares } from '@/libs/zustand/utils';
import { TrpcRouterInput } from '@workspace/api';
import { create } from 'zustand';

// Types
type SampleGetAllInput = TrpcRouterInput['sample']['getAll'];
type Filters = SampleGetAllInput['filters'];
type SortBy = SampleGetAllInput['sortBy'];

interface Store {
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  filters: Filters;
  sortBy: SortBy;
  changePage: (page: number) => void;
  changeRowsPerPage: (rowsPerPage: number) => void;
  filterData: (filters?: Filters) => void;
  sortDataBy: (sortBy?: SortBy) => void;
}

// Zustand constants
const PERSIST_STORE_NAME = 'sampleTableStore';
const PERSIST_KEYS = [] as const;

// Constants
const ROWS_PER_PAGE_OPTIONS = [5, 10, 25];

// Values
const initialPage = 0;

export const useSampleTableStore = create<Store>()(
  applyMiddlewares({
    persistStoreName: PERSIST_STORE_NAME,
    persistKeys: PERSIST_KEYS,
    store: (set) => {
      return {
        page: initialPage,
        rowsPerPage: ROWS_PER_PAGE_OPTIONS[1],
        rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
        filters: undefined,
        sortBy: undefined,
        isFetching: false,
        results: [],
        dataCount: 0,
        changePage: (page) =>
          set((state) => {
            state.page = page;
          }),
        changeRowsPerPage: (rowsPerPage) => {
          set((state) => {
            state.page = initialPage;
            state.rowsPerPage = rowsPerPage;
          });
        },
        filterData: (filters) => {
          set((state) => {
            state.page = initialPage;
            state.filters = filters;
          });
        },
        sortDataBy: (sortBy) => {
          set((state) => {
            state.page = initialPage;
            state.sortBy = sortBy;
          });
        },
      };
    },
  }),
);
