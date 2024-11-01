import { useImmer } from 'use-immer';

// Types
type Directions = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];

interface State {
  activeKey: string;
  direction: Directions;
  isDesc: boolean;
}

// Constants
const DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

export const useTableHeadSort = () => {
  const [order, setOrder] = useImmer<State>({
    activeKey: '',
    direction: DIRECTIONS.ASC,
    isDesc: false,
  });

  // Utils
  const sortByColumn = (columnKey: string) => {
    setOrder((draft) => {
      const isActiveKey = draft.activeKey === columnKey;
      const isOrderAsc = draft.direction === DIRECTIONS.ASC;
      const isActiveAsc = isActiveKey && isOrderAsc;
      const direction = isActiveAsc ? DIRECTIONS.DESC : DIRECTIONS.ASC;
      const isDirectionDesc = direction === DIRECTIONS.DESC;

      draft.activeKey = columnKey;
      draft.direction = direction;
      draft.isDesc = isDirectionDesc;
    });
  };

  return { order, sortByColumn };
};
