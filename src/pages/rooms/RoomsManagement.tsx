import { buttonVariants } from '../../components/ui/button.tsx';
import { NavLink } from 'react-router';

export default function RoomsManagement() {
  return (
    <div>
      <NavLink to="/rooms/editor" className={buttonVariants({ variant: 'outline' })}>Editor</NavLink>
      <h1>Rooms Management</h1>
      <p>This is the rooms management page.</p>
    </div>
  );
}