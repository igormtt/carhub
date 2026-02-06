export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">CarHub Pro</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A plataforma inteligente para gestão, comparação e cálculo de
              custos automotivos. Transformando dados em economia para você.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Recursos</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>Simulador de Combustível</li>
              <li>Histórico de Manutenção</li>
              <li>Comparação Técnica</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Desenvolvedor</h4>
            <p className="text-slate-400 text-sm">
              Projeto de Portfólio Fullstack <br />
              Construído com Next.js 14 & Tailwind.
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-900 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} CarHub Pro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
