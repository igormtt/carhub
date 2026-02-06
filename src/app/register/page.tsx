import LoginForm from "./components/register-form";

export const metadata = {
  title: "Registrar | CarHub Pro",
  description: "Acesse sua garagem inteligente.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      {/* Background Decorativo (opcional) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10" />

      <div className="max-w-md w-full space-y-8 bg-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            CarHub
            <span className="text-blue-500 underline decoration-2 underline-offset-4">
              Pro
            </span>
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            A plataforma definitiva para entusiastas e proprietários.
          </p>
        </div>

        <LoginForm />

        <p className="text-center text-sm text-slate-500">
          Já tem uma conta?{" "}
          <a
            href="/login"
            className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            Faça seu login
          </a>
        </p>
      </div>
    </main>
  );
}
