import React from "react";
import NavLink from "../atoms/NavLink";
import { CiViewList, CiWallet } from "react-icons/ci";
import { BsArrowLeftRight } from "react-icons/bs";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";

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
        <NavLink href="/conta">
          <LiaMoneyCheckAltSolid />
          Contas
        </NavLink>
        <NavLink href="/despesa">
          <FaMoneyBillTransfer />
          Despesas
        </NavLink>
      </nav>

      <div className="flex gap-2 items-center">
        <BsPersonCircle />
        <h4>Xand Zap</h4>
      </div>
    </div>
  );
}

export default Navbar;

