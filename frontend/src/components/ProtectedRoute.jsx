import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, role }) {
  const { user, token } = useAuth();

  // ⏳ Wait until auth loads
  if (token === undefined) {
    return <div>Loading...</div>;
  }

  // ❌ Not logged in
  if (!token) {
    return <Navigate to="/login" />;
  }

  // ❌ Role mismatch
  if (role && user?.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}