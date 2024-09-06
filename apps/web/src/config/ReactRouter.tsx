import { ROUTES } from '@/constants/routes';
import { ErrorPage } from '@/pages/ErrorPage';
import { HomePage } from '@/pages/HomePage';
import { SamplePage } from '@/pages/SamplePage';
import { UnauthorizedPage } from '@/pages/UnauthorizedPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Router settings
const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    errorElement: <ErrorPage />, // Global error page
    element: <HomePage />,
    children: [{ path: ROUTES.SAMPLE, element: <SamplePage /> }],
  },
  { path: ROUTES.UNAUTHORIZED, element: <UnauthorizedPage /> },
]);

export const ReactRouter = () => {
  return <RouterProvider router={router} />;
};
