import { RouterOutputType, trpc } from '@/libs/trpc';
import { createContext, PropsWithChildren, useMemo, useReducer } from 'react';

// Types
type SampleGetAllType = RouterOutputType['sample']['getAll'];

interface ReadContextType {
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  dataCount: SampleGetAllType['dataCount'];
  results: SampleGetAllType['results'];
}

interface UpdateContextType {
  changePage: (page: number) => void;
  changeRowsPerPage: (rowsPerPage: number) => void;
}

type StateType = typeof initialStateValues;

interface ActionSetPageType extends Pick<ReadContextType, 'page'> {
  type: typeof ACTIONS.SET_PAGE;
}
interface ActionSetRowsPerPageType
  extends Pick<ReadContextType, 'rowsPerPage'> {
  type: typeof ACTIONS.SET_ROWS_PER_PAGE;
}
type ActionType = ActionSetPageType | ActionSetRowsPerPageType;

// Constants
const ACTIONS = {
  SET_PAGE: 'SET_PAGE',
  SET_ROWS_PER_PAGE: 'SET_ROWS_PER_PAGE',
} as const;

const ROWS_PER_PAGE_OPTIONS = [5, 10, 25];

// Initial values
const initialStateValues = {
  page: 0,
  rowsPerPage: ROWS_PER_PAGE_OPTIONS[1],
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
  });

  // Methods
  const changePage = (page: number) =>
    dispatch({ type: ACTIONS.SET_PAGE, page });

  const changeRowsPerPage = (rowsPerPage: number) =>
    dispatch({ type: ACTIONS.SET_ROWS_PER_PAGE, rowsPerPage });

  // Context values
  const readContextValues: ReadContextType = {
    page: state.page,
    rowsPerPage: state.rowsPerPage,
    rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
    dataCount: data?.dataCount || 0,
    results: data?.results || [],
  };

  const updateContextValues = useMemo(
    () => ({
      changePage,
      changeRowsPerPage,
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
