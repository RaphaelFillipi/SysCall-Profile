import { AccountButtonProps } from "../../types/AccountButton.type";
import iconTrash from "../../assets/icons/icon-trash.svg";

export function DeleteAccountButton({ action }: AccountButtonProps) {
  return (
    <button className="py-2 px-3 text-[12px] font-extrabold text-default-danger border-[2px] border-default-danger rounded-[6px]">
      <div className="flex flex-row space-x-1 justify-center items-center">
        <div className="w-[14px]">
          <img src={iconTrash} alt="Ícone de Lixeira" className="w-full" />
        </div>
        <span>{action}</span>
      </div>
    </button>
  );
}
