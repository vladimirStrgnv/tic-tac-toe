import Image from "next/image";
import avatarSrc from "./avatar.png";
import clsx from "clsx";

export function Profile({ className }) {
  return (
    <div className={clsx(className, "text-teal-600 flex items-center gap-2 text-start")}>
      <Image src={avatarSrc} alt="avatar" unoptimized></Image>
      <div>
        <div className=" text-lg leading-tight">Paromov</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: 1230
        </div>
      </div>
    </div>
  );
}
