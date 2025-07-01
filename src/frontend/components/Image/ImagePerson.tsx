import imgPerson from "../../assets/images/image-person.svg";

export function ImagePerson() {
  return (
    <div className="w-3/4">
      <img
        src={imgPerson}
        alt="Imagem do Perfil"
        className="w-full aspect-square"
      />
    </div>
  );
}
