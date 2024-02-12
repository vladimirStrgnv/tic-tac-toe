import { SYMBOL_O, SYMBOL_X } from "./constants";
import clsx from "clsx";

export function GameSymbol({ symbol }) {
  return (
    <span
      className={clsx(
        "text-xl leading-6",
        {
          [SYMBOL_O]: "text-green-600",
          [SYMBOL_X]: "text-red-600",
        }[symbol],
      )}
    >
      {symbol}
    </span>
  );
}
