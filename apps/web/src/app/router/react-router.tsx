import { LandingRoute } from '@/app/routes/landing.route';
import { NotFoundRoute } from '@/app/routes/not-found.route';
import { SampleRoute } from '@/app/routes/sample.route';
import { UnauthorizedRoute } from '@/app/routes/unauthorized.route';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './constants';

// Settings
const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    errorElement: <NotFoundRoute />, // Global error page
    element: <LandingRoute />,
  },
  { path: ROUTES.SAMPLE, element: <SampleRoute /> },
  { path: ROUTES.UNAUTHORIZED, element: <UnauthorizedRoute /> },
]);

export const ReactRouter = () => {
  return <RouterProvider router={router} />;
};
