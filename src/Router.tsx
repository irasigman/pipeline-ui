import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { ChatPage } from './pages/Chat.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path:'/line/:id',
    element: <ChatPage />,
  }
]);

export function Router() {

    return (
        <><RouterProvider router={router} /></>
    );
  }
