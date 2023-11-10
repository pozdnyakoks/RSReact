import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ModalItem from './components/ModalItem/ModalItem';
import NotFound from './components/NotFound/NotFound';
// import MainPage from './components/MainPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<ModalItem />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
  //   [
  //   {
  //     path: '/',
  //     element: <App />,
  //     errorElement: <NotFound />,

  //     children: [
  //       {
  //         path: 'search',
  //         element: <ModalItem />,
  //         errorElement: <NotFound />,
  //         children: [
  //           {
  //             path: '*',
  //             element: <NotFound />,
  //           },
  //         ],
  //       },
  //       {
  //         path: '*',
  //         element: <NotFound />,
  //       },
  //     ],
  //   },
  // ]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
