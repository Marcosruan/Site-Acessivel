type HeaderProps = {
  titulo: string;
};

export function Header({ titulo }: HeaderProps) {
  return (
    <header>
      <img src="" alt="Logo do site acessível" />
      <h1>{titulo}</h1>
      <hr />
    </header>
  );
}
