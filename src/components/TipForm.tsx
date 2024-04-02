import { Dispatch, SetStateAction } from "react";

const tipOptions = [
  { id: "tip-10", value: 0.1, label: "10%" },
  { id: "tip-20", value: 0.2, label: "20%" },
  { id: "tip-30", value: 0.3, label: "30%" },
];

type TipFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

export default function TipForm({ setTip, tip }: TipFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl"></h3>
      <form action="">
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOption.value === tip}
            ></input>
          </div>
        ))}
      </form>
    </div>
  );
}
