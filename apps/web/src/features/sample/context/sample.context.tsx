import { useTrpcSample } from '@/features/sample/hooks';
import { TrpcRouterInput, TrpcRouterOutput } from '@workspace/api';
import { createContext, PropsWithChildren, useCallback, useMemo } from 'react';
import { useImmerReducer } from 'use-immer';

// Types
type SampleGetAllInput = TrpcRouterInput['sample']['getAll'];
type SampleGetAllOutput = TrpcRouterOutput['sample']['getAll'];

type Filters = SampleGetAllInput['filters'];

interface ReadContext {
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  filters: Filters;
  dataCount: number;
  results: SampleGetAllOutput['results'];
  isFetching: boolean;
}

interface UpdateContext {
  changePage: (page: number) => void;
  changeRowsPerPage: (rowsPerPage: number) => void;
  filterData: (filters: Filters) => void;
}

type State = Pick<ReadContext, 'page' | 'rowsPerPage' | 'filters'>;

interface ActionSetPage extends Pick<ReadContext, 'page'> {
  type: typeof ACTIONS.SET_PAGE;
}
interface ActionSetRowsPerPage extends Pick<ReadContext, 'rowsPerPage'> {
  type: typeof ACTIONS.SET_ROWS_PER_PAGE;
}
interface ActionSetFilters extends Pick<ReadContext, 'filters'> {
  type: typeof ACTIONS.SET_FILTERS;
}
type Action = ActionSetPage | ActionSetRowsPerPage | ActionSetFilters;

// Constants
const ACTIONS = {
  SET_PAGE: 'SET_PAGE',
  SET_ROWS_PER_PAGE: 'SET_ROWS_PER_PAGE',
  SET_FILTERS: 'SET_FILTERS',
} as const;

const ROWS_PER_PAGE_OPTIONS = [5, 10, 25];

// Initial values
const initialStateValues: State = {
  page: 0,
  rowsPerPage: ROWS_PER_PAGE_OPTIONS[1],
  filters: undefined,
};

// Create context
export const ReadSampleContext = createContext<ReadContext | undefined>(
  undefined,
);
export const UpdateSampleContext = createContext<UpdateContext | undefined>(
  undefined,
);

// Context provider
export const SampleProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useImmerReducer<State, Action>((draft, action) => {
    switch (action.type) {
      case ACTIONS.SET_PAGE:
        draft.page = action.page;
        break;
      case ACTIONS.SET_ROWS_PER_PAGE:
        draft.page = initialStateValues.page;
        draft.rowsPerPage = action.rowsPerPage;
        break;
      case ACTIONS.SET_FILTERS:
        draft.page = initialStateValues.page;
        draft.filters = action.filters;
        break;
      default:
        break;
    }
  }, initialStateValues);

  // "trpc"
  const { getAllSample, isGetAllSampleFetching } = useTrpcSample();
  const { data } = getAllSample({
    page: state.page,
    rowsPerPage: state.rowsPerPage,
    filters: state.filters,
  });

  // Values
  const dataCount = data?.dataCount ?? 0;

  // Methods
  const changePage = useCallback(
    (page: number) => dispatch({ type: ACTIONS.SET_PAGE, page }),
    [dispatch],
  );

  const changeRowsPerPage = useCallback(
    (rowsPerPage: number) =>
      dispatch({ type: ACTIONS.SET_ROWS_PER_PAGE, rowsPerPage }),
    [dispatch],
  );

  const filterData = useCallback(
    (filters: Filters) => dispatch({ type: ACTIONS.SET_FILTERS, filters }),
    [dispatch],
  );

  // Context values
  const readContextValues: ReadContext = {
    page: dataCount > 0 ? state.page : 0,
    rowsPerPage: state.rowsPerPage,
    rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
    filters: state.filters,
    dataCount,
    results: data?.results ?? [],
    isFetching: isGetAllSampleFetching,
  };

  const updateContextValues = useMemo(
    (): UpdateContext => ({
      changePage,
      changeRowsPerPage,
      filterData,
    }),
    [changePage, changeRowsPerPage, filterData],
  );

  return (
    <ReadSampleContext.Provider value={readContextValues}>
      <UpdateSampleContext.Provider value={updateContextValues}>
        {children}
      </UpdateSampleContext.Provider>
    </ReadSampleContext.Provider>
  );
};
