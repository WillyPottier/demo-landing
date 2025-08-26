export default function Navbar() {
  return (
    <nav className="w-full px-4 py-3 bg-gray-100 shadow">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <span className="font-bold">Demo Landing 🚀</span>
          <ul className="flex gap-4 text-sm">
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#pricing" className="hover:underline">Pricing</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
    </nav>
  );
}