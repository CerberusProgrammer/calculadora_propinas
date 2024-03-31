import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";

function App() {
  return (
    <>
      <Header title={"Calculadora"}></Header>

      <main className="max-w-7xl mx-auto p-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black mb-10">Menu</h2>
          <div className="space-y-4">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item}></MenuItem>
            ))}
          </div>
        </div>
        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
