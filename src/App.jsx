import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Cart from './components/Cart';
import Headers from './components/Headers';
import ProductList from './components/ProductList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/product',
        element: <ProductList />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

export default function App() {
  return (
    <section>
      <RouterProvider router={router}>
        <AppLayout />
      </RouterProvider>
    </section>
  );
}

function AppLayout() {
  return (
    <section>
      <Headers />
      <Outlet />
    </section>
  );
}
