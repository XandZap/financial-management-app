import { Graph } from "../atoms";

interface props {
  achieved: number | 0;
  monthTotal: number | 0;
}

function GoalGraphic({ achieved, monthTotal }: props) {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden ">
      <div>
        {monthTotal && <Graph achieved={achieved} monthTotal={monthTotal} />}
        <div className="text-xs text-center flex justify-around">
          <span>R$ 0</span>
          <span>R${achieved > 999 ? (achieved / 1000).toFixed(1) + "K" : achieved}</span>
          <span>R${monthTotal > 999 ? (monthTotal / 1000).toFixed(1) + "K" : monthTotal}</span>
        </div>
      </div>
      <p className="font-bold text-center">Alcançado Vs Alvo</p>
    </div>
  );
}

export default GoalGraphic;

