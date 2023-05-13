import * as React from "react";
import {
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillHeart,
} from "react-icons/ai";
interface props {}

export default function Contact({}: props) {
  return (
    <section className="h-screen w-screen bg-white">
      <aside className="bg-[#0b1d40] w-1/4 h-screen py-20 flex flex-col justify-center items-center text-slate-400">
        <div className="w-full px-6 flex-col gap-12 flex">
          <div>
            <h4 className="font-light">Mis Redes</h4>
            <div className="flex flex-row gap-2 w-full">
              <a
                href="https://www.instagram.com/miqueasledesma98/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram size={30} color="#fff" />
              </a>
              <a
                href="https://www.linkedin.com/in/miqueas-ledesma-08a106246/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size={30} color="#fff" />
              </a>
              <a
                href="https://twitter.com/_MiqueasLedesma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle size={30} color="#fff" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-light">Telefono</h4>
            <h4 className="text-white">+54 3704 716194</h4>
          </div>
          <div>
            <h4 className="font-light">Email</h4>
            <a
              className="text-white"
              href="mailto:miqueasledesmadev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              miqueasledesmadev@gmail.com
            </a>
          </div>
          <h4 className="text-sm">
            Made it with{" "}
            <AiFillHeart
              size={18}
              style={{ display: "inline-block", marginBottom: "-2px" }}
            />{" "}
            by Miqueas Ledesma
          </h4>
        </div>
      </aside>
    </section>
  );
}
