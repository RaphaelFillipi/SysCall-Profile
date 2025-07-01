import { ProfileInfoProps } from "../../types/ProfileInfoProps.type";

export function ProfileInfo({
  label,
  value,
  type,
  textColor,
  ...rest
}: ProfileInfoProps) {
  return (
    <div className="flex flex-col w-full space-y-2 text-gray-dark">
      <label className="font-extrabold text-[12px] pl-3">{label}</label>
      <input
        defaultValue={value}
        type={type}
        className={`border-b-2 border-green-second w-full px-3 outline-none ${textColor}`}
        {...rest}
      />
    </div>
  );
}
