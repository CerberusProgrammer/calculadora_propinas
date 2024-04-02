import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotal from "./components/OrderTotal";
import TipForm from "./components/TipForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, addItem, removeItem, tip, setTip, cleanOrder } = useOrder();

  return (
    <div>
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
            {order.length > 0 ? (
              <div>
                <OrderContent
                  order={order}
                  removeItem={removeItem}
                ></OrderContent>
                <TipForm setTip={setTip} tip={tip}></TipForm>
                <OrderTotal
                  order={order}
                  tip={tip}
                  cleanOrder={cleanOrder}
                ></OrderTotal>
              </div>
            ) : (
              <div>
                <p className="text-center">Orden vacia</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
