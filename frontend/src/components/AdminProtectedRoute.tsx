// components/AdminProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';

interface AdminProtectedRouteProps { // fix: added type definition
    isAuthenticated: boolean;
}

const AdminProtectedRoute = ({ isAuthenticated }: AdminProtectedRouteProps) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminProtectedRoute;