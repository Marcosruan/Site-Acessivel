import type { Estados } from "../../App";
import logo from "../../assets/logo_do_site_acessivel.png";

type HeaderProps = {
  titulo: string;
  area: Estados["area"];
  setArea: (area: Estados["area"]) => void;
};

export function Header({ titulo, area, setArea }: HeaderProps) {
  return (
    <header className="flex bg-white items-center w-full h-[132px] gap-3 px-4 py-4 border-b-2 border-[#2187FF] shadow-[0_5px_10px_rgba(4,97,207,0.50)]">
      <img
        src={logo}
        alt="Logo do site acessível. Ícones redondos que remetem à acessibilidade saindo de um livro aberto."
        width="68px"
        height="68px"
        className="ml-24"
      />
      
      <button 
        type="button"
        onClick={() => setArea(area)}
        className="bg-transparent border-none p-0 cursor-pointer text-left focus:outline-2 focus:outline-[#0973F0]"
      >
        <h1 className="font-semibold text-[#595959] text-xl">{titulo}</h1>
      </button>

      <hr />
    </header>
  );
}