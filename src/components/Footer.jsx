export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="mx-auto max-w-7xl px-6 text-white/60 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} GlacioPay. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Status</a>
        </nav>
      </div>
    </footer>
  )
}
