import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/layout.tsx';
import RoomsManagement from './pages/rooms/RoomsManagement.tsx';
import Dashboard from './pages/dashboard/Dashboard.tsx';
import RoomEditor from './pages/rooms/RoomEditor.tsx';
import ShowtimesManagement from './pages/showtimes/ShowtimesManagement.tsx';
import ShowtimesEditor from './pages/showtimes/ShowtimesEditor.tsx';
import Rooms from './pages/rooms/Rooms.tsx';
import Showtimes from './pages/showtimes/Showtimes.tsx';

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: 'rooms',
        Component: Rooms,
        children: [
          {
            path: 'editor',
            Component: RoomEditor,
          },
          {
            path: 'management',
            Component: RoomsManagement,
          }
        ],
      },
      {
        path: 'showtimes',
        Component: Showtimes,
        children: [
          {
            path: 'editor',
            Component: ShowtimesEditor,
          },
          {
            path: 'management',
            Component: ShowtimesManagement,
          }
        ],
      },
    ],
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
