import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  cleanOrder: () => void;
  tip: number;
};

export default function OrderTotal({
  order,
  tip,
  cleanOrder,
}: OrderTotalsProps) {
  const subtotal = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const tipAmout = useMemo(() => subtotal * tip, [tip, subtotal]);
  const totalAmout = useMemo(() => subtotal + tipAmout, [tipAmout, subtotal]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total:</h2>
        <p>
          Subtotal: {""}
          <span className="font-bold ">{formatCurrency(subtotal)}</span>
        </p>
        <p>
          Propina: {""}
          <span className="font-bold ">{formatCurrency(tipAmout)}</span>
        </p>
        <p>
          Total: {""}
          <span className="font-bold ">{formatCurrency(totalAmout)}</span>
        </p>
      </div>
      <button
        className="w-full bg-teal-600 p-3 text-white shadow-sm font-bold mt-10 disabled:opacity-10"
        disabled={totalAmout == 0}
        onClick={() => cleanOrder()}
      >
        Enviar orden
      </button>
    </>
  );
}
