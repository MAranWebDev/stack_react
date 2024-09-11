import { RouterInputType, RouterOutputType, trpc } from '@/libs/trpc';
import { createContext, PropsWithChildren, useMemo, useReducer } from 'react';

// Types
type GetAllInputType = RouterInputType['sample']['getAll'];
type GetAllOutputType = RouterOutputType['sample']['getAll'];

type FiltersType = Pick<GetAllInputType, 'likeId' | 'likeName' | 'isDone'>;

interface ReadContextType {
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  filters: FiltersType;
  dataCount: number;
  results: GetAllOutputType['results'];
}

interface UpdateContextType {
  changePage: (page: number) => void;
  changeRowsPerPage: (rowsPerPage: number) => void;
  filterData: (filters: FiltersType) => void;
}

type StateType = Pick<ReadContextType, 'page' | 'rowsPerPage' | 'filters'>;

interface ActionSetPageType extends Pick<ReadContextType, 'page'> {
  type: typeof ACTIONS.SET_PAGE;
}
interface ActionSetRowsPerPageType
  extends Pick<ReadContextType, 'rowsPerPage'> {
  type: typeof ACTIONS.SET_ROWS_PER_PAGE;
}
interface ActionSetFiltersType extends Pick<ReadContextType, 'filters'> {
  type: typeof ACTIONS.SET_FILTERS;
}
type ActionType =
  | ActionSetPageType
  | ActionSetRowsPerPageType
  | ActionSetFiltersType;

// Constants
const ACTIONS = {
  SET_PAGE: 'SET_PAGE',
  SET_ROWS_PER_PAGE: 'SET_ROWS_PER_PAGE',
  SET_FILTERS: 'SET_FILTERS',
} as const;

const ROWS_PER_PAGE_OPTIONS = [5, 10, 25];

// Initial values
const initialStateValues: StateType = {
  page: 0,
  rowsPerPage: ROWS_PER_PAGE_OPTIONS[1],
  filters: {},
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case ACTIONS.SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case ACTIONS.SET_ROWS_PER_PAGE:
      return {
        ...state,
        page: initialStateValues.page,
        rowsPerPage: action.rowsPerPage,
      };
    case ACTIONS.SET_FILTERS:
      return {
        ...state,
        page: initialStateValues.page,
        filters: {
          likeId: action.filters.likeId,
          likeName: action.filters.likeName,
          isDone: action.filters.isDone,
        },
      };
    default:
      return state;
  }
};

// Create context
export const ReadSampleContext = createContext<ReadContextType | undefined>(
  undefined,
);
export const UpdateSampleContext = createContext<UpdateContextType | undefined>(
  undefined,
);

// Context provider
export const SampleProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialStateValues);
  const { data } = trpc.sample.getAll.useQuery({
    page: state.page,
    rowsPerPage: state.rowsPerPage,
    likeId: state.filters.likeId,
    likeName: state.filters.likeName,
    isDone: state.filters.isDone,
  });

  // Methods
  const changePage = (page: number) =>
    dispatch({ type: ACTIONS.SET_PAGE, page });

  const changeRowsPerPage = (rowsPerPage: number) =>
    dispatch({ type: ACTIONS.SET_ROWS_PER_PAGE, rowsPerPage });

  const filterData = (filters: FiltersType) =>
    dispatch({ type: ACTIONS.SET_FILTERS, filters });

  // Context values
  const readContextValues: ReadContextType = {
    page: state.page,
    rowsPerPage: state.rowsPerPage,
    rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
    filters: state.filters,
    dataCount: data?.dataCount || 0,
    results: data?.results || [],
  };

  const updateContextValues = useMemo(
    (): UpdateContextType => ({
      changePage,
      changeRowsPerPage,
      filterData,
    }),
    [],
  );

  return (
    <ReadSampleContext.Provider value={readContextValues}>
      <UpdateSampleContext.Provider value={updateContextValues}>
        {children}
      </UpdateSampleContext.Provider>
    </ReadSampleContext.Provider>
  );
};
