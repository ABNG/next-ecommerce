"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

type Props = {};

const Quantity = (props: Props) => {
  const [counter, setCounter] = useState(1);

  const incrementCount = () => {
    setCounter((prev) => prev + 1);
  };
  const decrementCount = () => {
    if (counter > 1) setCounter((prev) => prev - 1);
  };
  return (
    <div className="h-12 w-36 p-2 rounded-xl flex justify-between items-center">
      <Button variant="outline" size="icon" onClick={decrementCount}>
        <Minus />
      </Button>

      <p className="font-bold text-lg">{counter}</p>
      <Button variant="outline" size="icon" onClick={incrementCount}>
        <Plus />
      </Button>
    </div>
  );
};

export default Quantity;
