import { convertStringToReal } from "@/utils";
import { IBills } from "@/utils/types";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface props {
  bill: IBills;
}

function Bill({ bill: { date, title, category, value } }: props) {
  return (
    <div className="flex items-center gap-5 px-4 py-2">
      <div className="w-11 bg-zinc-200 rounded-md p-1 text-center text-zinc-600">
        <p className="font-semibold text-default-black/50">{format(new Date(date), "MMM", { locale: ptBR })}</p>
        <p className="text-2xl font-extrabold text-default-black/70">{format(new Date(date), "dd", { locale: ptBR })}</p>
      </div>
      <div className="flex-1">
        <p className="font-semibold text-default-black/80">{title}</p>
        <p className="text-sm text-default-black/60">{category}</p>
      </div>
      <p className="font-bold text-default-black/80">{convertStringToReal(value)}</p>
      <hr />
    </div>
  );
}

export default Bill;

