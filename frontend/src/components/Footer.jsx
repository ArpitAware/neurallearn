export default function Footer() {
  return (
    <div className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-4 gap-6 text-sm text-gray-400">
        
        <div>
          <h2 className="text-white font-bold mb-3">NeuralLearn</h2>
          <p>AI-powered LMS platform.</p>
        </div>

        <div>
          <h3 className="text-white mb-2">Product</h3>
          <p>Courses</p>
          <p>Dashboard</p>
          <p>Community</p>
        </div>

        <div>
          <h3 className="text-white mb-2">Company</h3>
          <p>About</p>
          <p>Careers</p>
        </div>

        <div>
          <h3 className="text-white mb-2">Support</h3>
          <p>Help Center</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}