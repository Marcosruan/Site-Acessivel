import logo from "../../assets/logo_do_site_acessivel.png";

type HeaderProps = {
  titulo: string;
};

export function Header({ titulo }: HeaderProps) {
  return (
    <header>
      <img
        src={logo}
        alt="Logo do site acessível"
        width="108px"
        height="108px"
      />
      <h1>{titulo}</h1>
      <hr />
    </header>
  );
}
