import { GameSymbol } from "./game-symbol";
import Image from "next/image";
import clsx from "clsx";

export function PlayerInfo({
  isRight,
  name,
  rating,
  avatar,
  symbol,
  isTimeRunning,
  seconds,
  className,
}) {
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (isTimeRunning) {
      return isDanger ? "text-orange-500" : "text-gray-900";
    }
    return "text-gray-200";
  };
  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <div
          className={clsx(
            className,
            "w-44 text-teal-600 flex items-center gap-2 text-start",
          )}
        >
          <Image src={avatar} alt="avatar" unoptimized></Image>
          <div className="overflow-hidden">
            <div className=" text-lg leading-tight truncate">{name}</div>
            <div className="text-slate-400 text-xs leading-tight">
              Рейтинг: {rating}
            </div>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={symbol} />
        </div>
      </div>
      <div
        className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}
      ></div>
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor(),
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
