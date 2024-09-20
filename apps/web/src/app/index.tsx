import { StatusBar } from '@/components/status-bar';
import { AppProvider } from './provider';
import { ReactRouter } from './react-router';

export const App = () => {
  return (
    <AppProvider>
      <StatusBar />
      <ReactRouter />
    </AppProvider>
  );
};
