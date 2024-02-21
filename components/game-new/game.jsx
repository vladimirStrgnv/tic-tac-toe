import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";
import { GameTitle } from "./ui/game-title";
import { GameInfo } from "./ui/game-info";
import { PLAYERS } from "./constants";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { useGameState } from "./model/use-game-state";
import { GameCell } from "./ui/game-cell";
import { GameOverModal } from "./ui/game-over-modal";

const PLAYERS_COUNT = 2;

export function Game() {
  const {
    cells,
    winnerSequence,
    winnerSymbol,
    currentMove,
    nextMove,
    handleCellClick,
  } = useGameState(PLAYERS_COUNT);

  const winnerPlayer = PLAYERS.find(player => player.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        gameInfo={
          <GameInfo isRatingGame playersCount={PLAYERS_COUNT} timeMode="1 мин. на ход" />
        }
        backLink={<BackLink />}
        title={<GameTitle />}
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            avatar={player.avatar}
            key={player.id}
            name={player.name}
            rating={player.rating}
            isRight={index % 2 === 1}
            seconds={60}
            symbol={player.symbol}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={() => {
              handleCellClick(index);
            }}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal 
        winnerPlayer={winnerPlayer?.name}
        players={PLAYERS.map((player, index) => (
          <PlayerInfo
            avatar={player.avatar}
            key={player.id}
            name={player.name}
            rating={player.rating}
            isRight={index % 2 === 1}
            seconds={60}
            symbol={player.symbol}
          />
        ))}/>
    </>
  );
}
