import React from "react";

function Bill() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="bg-zinc-200 rounded-md p-1 text-center text-zinc-600">
        <p>Maio</p>
        <p className="text-2xl font-extrabold text-zinc-800">15</p>
      </div>
      <div>
        <p>Titulo</p>
        <p>Categoria</p>
      </div>
      <div>R$ Valor</div>
    </div>
  );
}

export default Bill;

