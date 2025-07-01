import { TitleProfileProps } from "../../types/TitleProfile.type";

export function TitleProfile({ title }: TitleProfileProps) {
  return (
    <div>
      <h1 className="font-bold text-[24px] text-gray-dark">{title}</h1>
    </div>
  );
}
