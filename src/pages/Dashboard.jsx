import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div>
      Hello world
      <div className="flex min-h-[100vh]">
        <Sidebar />
        <div className="flex-1 w-full max-h-screen rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
