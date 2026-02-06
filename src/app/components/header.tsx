import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-white tracking-tighter"
        >
          CarHub<span className="text-blue-500">Pro</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link
            href="/dashboard"
            className="hover:text-blue-400 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/garage"
            className="hover:text-blue-400 transition-colors"
          >
            Minha Garagem
          </Link>
          <Link
            href="/compare"
            className="hover:text-blue-400 transition-colors"
          >
            Comparador
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/pages/login"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Entrar
          </Link>
          <Link
            href="/pages/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all"
          >
            Começar Agora
          </Link>
        </div>
      </div>
    </header>
  );
}
