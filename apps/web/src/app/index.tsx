import { LoadingBar } from '@/components/loading-bar';
import { AppProvider } from './provider';
import { ReactRouter } from './react-router';

export const App = () => {
  return (
    <AppProvider>
      <LoadingBar />
      <ReactRouter />
    </AppProvider>
  );
};
