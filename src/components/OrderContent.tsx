import { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import {  OrderItem } from "../types";
import { OrderActions } from "../reducers/orderReducer";

type OrderContentsProps = {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>
};

export default function OrderContent({
  order,
  dispatch,
}: OrderContentsProps) {
  return (
    <div>
      <div className="space-y-3 mt-5">
        {order.length === 0 ? (
          <p className="text-center">Orden vacia</p>
        ) : (
          order.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-t border-gray-100 py-5 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} -
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <div>
                {" "}
                <button
                  onClick={() => dispatch({type: 'remove-item', payload: {item: item.id}})}
                  className="bg-red-100 h-8 w-8 rounded-full text-red-600 font-bold"
                >
                  X
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
