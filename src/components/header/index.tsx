import type { Estados } from "../../App";
import logo from "../../assets/logo_do_site_acessivel.png";

type HeaderProps = {
  titulo: string;
  area: Estados["area"];
  setArea: (area: Estados["area"]) => void;
};

export function Header({ titulo, area, setArea}: HeaderProps) {
  return (
    <header className = "flex items-center width-full height-[132px] gap-3 px-4 py-4 border-b-2 border-[#2187FF] shadow-[0_5px_10px_rgba(4,97,207,0.50)]">
      <img
        src={logo}
        alt="Logo do site acessível"
        width="108px"
        height="108px"
        className="ml-24"
      />
      <a onClick={() => setArea(area)}>
      <h1 className="font-semibold text-gray-700" >{titulo}</h1>
      </a>
      <hr />
    </header>
  );
}
