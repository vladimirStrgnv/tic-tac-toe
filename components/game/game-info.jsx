import clsx from "clsx";
import { Profile } from "../profile";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";
import avatarSrc1 from "./images/avatar-1.png";
import avatarSrc2 from "./images/avatar-2.png";
import avatarSrc3 from "./images/avatar-3.png";
import avatarSrc4 from "./images/avatar-4.png";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    name: "Strogonov",
    rating: 1230,
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "Ivanovaetrovaer",
    rating: 1231,
    avatar: avatarSrc2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Petrova",
    rating: 1232,
    avatar: avatarSrc3,
    symbol: GAME_SYMBOLS.TRINGLE,
  },
  {
    id: 4,
    name: "Serov",
    rating: 1233,
    avatar: avatarSrc4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

export function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  onPlayerTimeOver,
}) {
  return (
    <div
      className={clsx(
        className,
        "grid grid-cols-2 gap-3  bg-white rounded-2xl shadow-md px-8 py-4",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => {
        return (
          <PlayerInfo
            key={player.id}
            playerInfo={player}
            isRight={index % 2 === 1}
            isTimeRunning={currentMove === player.symbol && !isWinner}
            onTimeOver={() => onPlayerTimeOver(player.symbol)}
          />
        );
      })}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimeRunning, onTimeOver }) {
  const [seconds, setSeconds] = useState(6);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimeRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);

      return () => {
        setSeconds(60);
        clearInterval(interval);
      };
    }
  }, [isTimeRunning]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver();
    }
  }, [seconds]);

  const getTimerColor = () => {
    if (isTimeRunning) {
      return isDanger ? "text-orange-500" : "text-gray-900";
    }
    return "text-gray-200";
  };

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
          {...playerInfo}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
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
