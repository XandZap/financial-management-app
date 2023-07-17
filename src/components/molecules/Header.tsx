import { Input } from "../ui/input";

function Header() {
  return (
    <header className="flex justify-between py-2 px-6 w-full bg-bg-grey border-b border-zinc-200">
      <div>
        <h1 className="font-bold text-default-black">Bem Vindo</h1>
      </div>
      {/* <div>
        <Input type="text" placeholder="Buscar" />
      </div> */}
    </header>
  );
}

export default Header;

