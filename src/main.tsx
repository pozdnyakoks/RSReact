import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  // BrowserRouter,
  createBrowserRouter,
  // Route,
  RouterProvider,
  // Routes,
  // Route,
  // Link,
} from 'react-router-dom';
import ModalItem from './components/ModalItem/ModalItem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // loader: rootLoader
    children: [
      {
        path: '/',
        element: <ModalItem />,
        //     // loader: '',
        //     children: [
        //       {
        //         path: ':id',
        //         element: '',
        //         // loader: '',
      },
    ],
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
