import logo from "./assets/nlw-expert-logo.svg";
import { Card } from "./components/card";
import { NewCard } from "./components/new-card";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12">
      <img
        src={logo}
        alt="nlw expert logo"
      />

      <form className="w-full mt-4">
        <input
          type="text"
          placeholder="Busque em suas notas.."
          className="w-full bg-transparent text-3xl font-semibold tracking-tighter outline-none placeholder:text-red-800"
        />
      </form>

      <div className="mb-6 mt-6 h-px bg-red-700"></div>

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewCard />

        <Card note={{
          date: new Date(),
          content: 'Ola mundo'
        }} />
      </div>
    </div>
  );
}
