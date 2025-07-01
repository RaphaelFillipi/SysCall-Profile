import { ImagePerson } from "../components/Image/ImagePerson";
import { ProfileInfo } from "../components/Input/ProfileInfo";
import { TitleProfile } from "../components/Title/TitleProfile";

export function Profile() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen py-4">
      <div className="flex flex-col items-center space-y-6 w-5/6 py-4 px-6 shadow-div-profile rounded-xl">
        <TitleProfile title="Meu Perfil" />
        <ImagePerson />
        <div className="w-full space-y-8">
          <ProfileInfo
            label="Número de Telefone"
            type="text"
            value="+55 (11) 98493-1742"
            textColor="text-gray-second"
            readOnly
          />
          <ProfileInfo
            label="Nome"
            type="text"
            value="Sofia"
            textColor="text-gray-dark"
          />
          <ProfileInfo
            label="Sobrenome"
            type="text"
            value="Bianchi Rodrigues"
            textColor="text-gray-dark"
          />
          <ProfileInfo
            label="E-mail"
            type="text"
            value="sofia.rodrigues@gmail.com"
            textColor="text-gray-second"
            readOnly
          />
          <ProfileInfo
            label="Senha"
            type="password"
            value="jjnwewefenwf"
            textColor="text-gray-dark"
          />
        </div>
      </div>
    </div>
  );
}
