import type { FormEvent } from "react";
import type { AppState } from "../../../App";

type FooterProps = {
  setArea: (area: AppState["area"]) => void;
};

export function Footer({ setArea }: FooterProps) {
  const handleSubmitNewsletter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Inscrição realizada com sucesso!");
  };

  return (
    <footer className="w-full bg-white border-t-2 border-[#2187FF] shadow-[0_-5px_10px_rgba(4,97,207,0.15)] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-[#064EA4]">Site Acessível</h2>
          <p className="text-sm text-[#595959] leading-relaxed max-w-sm">
            Uma plataforma dedicada ao ensino inclusivo, combinando recursos
            visuais, tecnologias assistivas e ferramentas de tradução em Libras
            para garantir aprendizado para todos.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-[#064EA4]">Acessibilidade</h2>
          <nav aria-label="Navegação do rodapé" className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-[#595959] hover:text-[#0973F0] text-left transition-colors duration-200 focus:outline-2 focus:outline-[#0973F0] w-fit"
            >
              Voltar ao topo
            </button>
            <button
              onClick={() => setArea("home")}
              className="text-sm text-[#595959] hover:text-[#0973F0] transition-colors duration-200 focus:outline-2 focus:outline-[#0973F0] w-fit"
            >
              Ir para o conteúdo principal
            </button>
            <span className="text-sm text-[#595959] flex items-center gap-1">
              Tradutor de Libras ativo <span>🤟</span>
            </span>
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-[#064EA4]">Novidades</h2>
          <p className="text-sm text-[#595959]">
            Receba avisos de novas matérias e exercícios:
          </p>
          <form
            onSubmit={handleSubmitNewsletter}
            className="flex gap-2 w-full max-w-md"
          >
            <input
              type="email"
              placeholder="Seu e-mail"
              required
              aria-label="Digite seu e-mail para novidades"
              className="flex-1 px-3 py-2 border border-[#ADACB1] rounded-md text-sm text-[#595959] focus:outline-none focus:border-[#0973F0] focus:ring-1 focus:ring-[#0973F0]"
            />
            <button
              type="submit"
              className="bg-[#064EA4] hover:bg-[#0461CF] text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 focus:outline-2 focus:outline-[#0973F0]"
            >
              Assinar
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#064EA4] text-white text-center py-4 px-4 text-xs font-light">
        <p>
          © {new Date().getFullYear()} Site Acessível. Desenvolvido focando em
          inclusão e diversidade na Web.
        </p>
      </div>
    </footer>
  );
}
