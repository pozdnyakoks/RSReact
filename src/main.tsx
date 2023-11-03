import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // loader: rootLoader
    // children: [
    //   {
    // path: '',
    //     element: '',
    //     // loader: '',
    //     children: [
    //       {
    //         path: ':id',
    //         element: '',
    //         // loader: '',
    //       },
    //     ],
    //   },
    // ],
  },
  {
    path: 'search',
    element: <div>About</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
