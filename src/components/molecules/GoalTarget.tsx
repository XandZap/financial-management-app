import { convertStringToReal } from "@/utils";
import React from "react";
import { IconType } from "react-icons";

interface props {
  title: string;
  value: number | undefined;
  Icon: IconType;
}

function GoalTarget({ title, Icon, value }: props) {
  return (
    <div className="flex gap-2 h-full">
      <Icon className="text-default-black/70 mt-1" />
      <div>
        <p className="text-sm text-default-black/70">{title}</p>
        <p className="font-bold">{convertStringToReal(value)}</p>
      </div>
    </div>
  );
}

export default GoalTarget;

