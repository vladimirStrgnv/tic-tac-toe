import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { HistoryIcon } from "./icons/history-icon";

export function GameInfo({ playersCount, isRatingGame = true, timeMode }) {
  return (
    <>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        {isRatingGame && <StarIcon />}
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon /> {playersCount}
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon /> {timeMode}
        </div>
      </div>
    </>
  );
}
