import { Header } from "../components/header";
import { GameTitle, GameInfo, GameField } from "../components/game";
import { useState } from "react";
import { useGameState } from "../components/game";

export default function HomePage() {
  const [playersCount] = useState(4);
  const { cells, currentMove, nextMove, handleCellClick } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          className="mt-4"
          currentMove={currentMove}
        />
        <GameField
          handleCellClick={handleCellClick}
          nextMove={nextMove}
          playersCount={playersCount}
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
        />
      </main>
    </div>
  );
}
