import { CiViewList, CiWallet } from "react-icons/ci";
import { BsArrowLeftRight } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { IconType } from "react-icons";



export const navigationNames = [
  {
    name: "Inicio",
    href: "/",
    icon: CiViewList,
  },
  {
    name: "Saldos",
    href: "/saldo",
    icon: CiWallet,
  },
  {
    name: "Transações",
    href: "/transacoes",
    icon: BsArrowLeftRight,
  },
  {
    name: "Objetivos",
    href: "/objetivos",
    icon: TbTargetArrow,
  },
  {
    name: "Despesas",
    href: "/despesas",
    icon: FaMoneyBillTransfer,
  },
];

