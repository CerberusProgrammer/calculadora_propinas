import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
};

export default function OrderTotal({ order }: OrderTotalsProps) {
  const subtotal = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

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
          <span className="font-bold ">$0</span>
        </p>
        <p>
          Total: {""}
          <span className="font-bold ">$0</span>
        </p>
      </div>
      <button></button>
    </>
  );
}
