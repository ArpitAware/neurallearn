import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import { Mail, User, Shield } from "lucide-react";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#020617] p-6">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8"
      >
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">
              {user?.name}
            </h1>
            <p className="text-gray-400 text-sm">
              Welcome back 👋
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-5">
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
            <Mail className="text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white">{user?.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
            <User className="text-purple-400" />
            <div>
              <p className="text-sm text-gray-400">Name</p>
              <p className="text-white">{user?.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
            <Shield className="text-green-400" />
            <div>
              <p className="text-sm text-gray-400">Role</p>
              <p className="text-white capitalize">{user?.role}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}