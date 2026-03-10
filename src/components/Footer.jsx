export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="text-lg font-bold text-stone-900">VibeCoding</span>
          <p className="text-sm text-stone-500 mt-1">
            Hecho con Next.js y mucho cafe.
          </p>
          <p className="text-sm text-stone-500 mt-2">
            Tel: <a href="tel:+526141223825" className="hover:text-amber-600 transition-colors">614 122 3825</a>
          </p>
        </div>

        <ul className="flex items-center gap-6">
          <li>
            <a
              href="#hero"
              className="text-sm text-stone-500 hover:text-amber-600 transition-colors"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-sm text-stone-500 hover:text-amber-600 transition-colors"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="text-sm text-stone-500 hover:text-amber-600 transition-colors"
            >
              Precios
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm text-stone-500 hover:text-amber-600 transition-colors"
            >
              Contacto
            </a>
          </li>
        </ul>

        <p className="text-sm text-stone-400">
          &copy; {new Date().getFullYear()} VibeCoding. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
