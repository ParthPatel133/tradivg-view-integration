import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import {
  createHashRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';

function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: <Dashboard />,
      children: [
        {
          path: '/:symbol',
          element: <Details />,
        },
      ],
    },
    {
      path: 'about',
      element: <div>About</div>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
