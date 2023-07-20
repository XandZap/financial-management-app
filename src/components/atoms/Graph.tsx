"use client";
import { PieChart, Pie, Cell } from "recharts";

interface props {
  achieved: number | 0;
  monthTotal: number;
}

const RADIAN = Math.PI / 180;

const cx = 120;
const cy = 100;
const iR = 80;
const oR = 90;

const needle = (
  value: number,
  data: { name: string; value: number; color: string }[],
  cx: number,
  cy: number,
  iR: number,
  oR: number,
  color: string
) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key={"circle"} cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      key={"path"}
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
};

function Graph({ achieved, monthTotal }: props) {
  const data = [
    { name: "achieved", value: achieved, color: "#299D91" },
    { name: "monthTotal", value: monthTotal - achieved > 0 ? monthTotal - achieved : 0, color: "#E8E8E8" },
  ];
  return (
    <PieChart height={120} width={250} className=" h-full w-full">
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill="#8884d8"
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      {needle(achieved || 0, data, cx, cy, iR, oR, "#299D91")}
    </PieChart>
  );
}

export default Graph;

