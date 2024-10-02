import { LanguageSwitch } from '@/components/language-switch';
import { LoadingBar } from '@/components/loading-bar';
import { AppProvider } from './provider';
import { ReactRouter } from './react-router';

export const App = () => {
  return (
    <AppProvider>
      <LanguageSwitch />
      <LoadingBar />

      <ReactRouter />
    </AppProvider>
  );
};
