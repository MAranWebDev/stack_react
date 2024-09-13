import { AppProvider } from './provider';
import { ReactRouter } from './router/react-router';

export const App = () => {
  return (
    <AppProvider>
      <ReactRouter />
    </AppProvider>
  );
};
