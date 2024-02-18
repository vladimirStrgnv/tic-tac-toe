import Image from "next/image";
import avatarSrc from "./avatar.png";
import clsx from "clsx";

export function Profile({ className, name, rating, avatar = avatarSrc }) {
  return (
    <div
      className={clsx(
        className,
        "text-teal-600 flex items-center gap-2 text-start",
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
  );
}
