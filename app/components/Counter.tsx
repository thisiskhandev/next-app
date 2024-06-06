"use client";

import { Button } from "@nextui-org/react";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slice/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Button
        variant="solid"
        color="primary"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <span className="text-2xl">{count}</span>
      <Button
        variant="bordered"
        color="danger"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </>
  );
}
