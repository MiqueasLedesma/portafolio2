import React, { SetStateAction } from "react";

type Props = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
};

export const MovileMenu = (props: Props) => {
  const { openMenu, setOpenMenu } = props;
  return (
    <div className="fixed w-screen h-screen hidden md:visible md:flex bg-black bg-opacity-50 flex-col justify-center items-center z-20">
      <nav className="w-[90%] h-fit bg-white rounded-md text-black text-center">
        <h2>Miqueas Ledesma</h2>
        <ul>
          <li>Sobre mi</li>
          <li>Skills</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </div>
  );
};
