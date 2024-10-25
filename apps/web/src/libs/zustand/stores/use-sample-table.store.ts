import { applyMiddlewares } from '@/libs/zustand/utils';
import { TrpcRouterInput, TrpcRouterOutput } from '@workspace/api';
import { create } from 'zustand';

// Types
type SampleGetAllInput = TrpcRouterInput['sample']['getAll'];
type SampleGetAllOutput = TrpcRouterOutput['sample']['getAll'];
type Filters = SampleGetAllInput['filters'];
type SortBy = SampleGetAllInput['sortBy'];
type Results = SampleGetAllOutput['results'];

interface Store {
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  filters: Filters;
  sortBy: SortBy;
  dataCount: number;
  results: Results;
  isFetching: boolean;
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
        // Initial values
        page: initialPage,
        rowsPerPage: ROWS_PER_PAGE_OPTIONS[1],
        rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
        filters: undefined,
        sortBy: undefined,
        dataCount: 0,
        results: [],
        isFetching: false,

        // Methods
        changePage: (page: number) =>
          set((state) => {
            state.page = page;
          }),
        changeRowsPerPage: (rowsPerPage: number) => {
          set((state) => {
            state.page = initialPage;
            state.rowsPerPage = rowsPerPage;
          });
        },
        filterData: (filters?: Filters) => {
          set((state) => {
            state.page = initialPage;
            state.filters = filters;
          });
        },
        sortDataBy: (sortBy?: SortBy) => {
          set((state) => {
            state.page = initialPage;
            state.sortBy = sortBy;
          });
        },
      };
    },
  }),
);
