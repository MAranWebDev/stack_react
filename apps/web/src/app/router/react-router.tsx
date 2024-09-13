import { ErrorPage } from '@/app/routes/ErrorPage';
import { HomePage } from '@/app/routes/HomePage';
import { SamplePage } from '@/app/routes/SamplePage';
import { UnauthorizedPage } from '@/app/routes/UnauthorizedPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './constants';

// Settings
const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    errorElement: <ErrorPage />, // Global error page
    element: <HomePage />,
  },
  { path: ROUTES.SAMPLE, element: <SamplePage /> },
  { path: ROUTES.UNAUTHORIZED, element: <UnauthorizedPage /> },
]);

export const ReactRouter = () => {
  return <RouterProvider router={router} />;
};
