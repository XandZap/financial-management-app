import React from "react";
import NavLink from "../atoms/NavLink";

import { CiViewList, CiWallet } from "react-icons/ci";
import { BsArrowLeftRight } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-col min-h-screen h-auto  bg-zinc-950 text-zinc-50 py-12 px-7 max-lg:hidden">
      <h1 className="text-center text-2xl font-extrabold">FinançasZap</h1>

      <nav className="flex flex-col flex-1 my-12">
        <NavLink href="/">
          <CiViewList />
          Inicio
        </NavLink>
        <NavLink href="/saldo">
          <CiWallet />
          Saldos
        </NavLink>
        <NavLink href="/transacoes">
          <BsArrowLeftRight />
          Transações
        </NavLink>
        <NavLink href="/objetivos">
          <TbTargetArrow />
          Objetivos
        </NavLink>
        <NavLink href="/despesas">
          <FaMoneyBillTransfer />
          Despesas
        </NavLink>
      </nav>

      <div className="flex gap-2 items-center">
        <Image
          src="https://github.com/XandZap.png"
          alt="Imagem do Alexandre"
          width={30}
          height={30}
          className="rounded-full"
        />
        <Link href="https://github.com/XandZap" target="_blank">
          <h4>
            XandZap
            <BsGithub />
          </h4>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

