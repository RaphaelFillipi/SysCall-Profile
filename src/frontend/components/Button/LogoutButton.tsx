import { AccountButtonProps } from "../../types/AccountButton.type";
import iconLogout from "../../assets/icons/icon-logout.svg";

export function LogoutButton({ action }: AccountButtonProps) {
  return (
    <button className="py-2 px-3 text-[12px] font-extrabold text-white-primary bg-green-dark rounded-[6px]">
      <div className="flex flex-row space-x-1 justify-center items-center">
        <div className="w-[14px]">
          <img
            src={iconLogout}
            alt="Ícone de Encerrar Sessão"
            className="w-full"
          />
        </div>
        <span>{action}</span>
      </div>
    </button>
  );
}
