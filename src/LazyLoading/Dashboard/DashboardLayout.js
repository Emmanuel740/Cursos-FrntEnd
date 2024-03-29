import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard">Dashboard Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/messages">Messages</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
}

export default DashboardLayout;