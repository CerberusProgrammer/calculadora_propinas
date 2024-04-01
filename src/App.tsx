import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotal from "./components/OrderTotal";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, addItem, removeItem } = useOrder();

  return (
    <>
      <Header title={"Calculadora"}></Header>

      <main className="max-w-7xl mx-auto p-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black mb-10">Menu</h2>
          <div className="space-y-4">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem}></MenuItem>
            ))}
          </div>
        </div>
        <div>
          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 shadow-md">
            <h1 className="font-black text-4xl ">Consumo</h1>
            <OrderContent order={order} removeItem={removeItem}></OrderContent>
            <OrderTotal order={order}></OrderTotal>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
