"use client";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { LiaAwardSolid } from "react-icons/lia";
import { TbTargetArrow } from "react-icons/tb";
import { format } from "date-fns";

import ContentName from "../atoms/ContentName";
import { AddGoal, GoalGraphic, GoalTarget } from "../molecules";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

import { getGoals } from "@/utils/storageFunctions/storageGoals";
import { convertStringToReal } from "@/utils";

interface props {
  className?: string;
}

const month = format(new Date(), "MMM");
const monthAndYear = format(new Date(), "MMM, yyyy");

function Goals({ className }: props) {
  const [isOpen, setIsOpen] = useState(false);
  const goals = getGoals();
  const monthGoal = goals.find((goal) => goal.month === month);

  return (
    <div className={" flex flex-col " + className}>
      <ContentName>Objetivos</ContentName>
      <Card className=" px-3 py-2 h-full">
        <CardHeader className=" flex flex-row justify-between p-4">
          <CardTitle>
            {convertStringToReal(monthGoal?.monthTotal)}
            <Button
              className=" p-0 bg-transparent text-default-black/60 ml-2 hover:bg-transparent"
              onClick={() => setIsOpen(true)}
            >
              <BiEdit />
            </Button>
          </CardTitle>
          <CardDescription>{monthAndYear} </CardDescription>
        </CardHeader>

        <hr />
        <CardContent className=" p-0">
          <div className="flex justify-between items-center py-4 max-sm:flex-col">
            <div className="flex flex-col gap-4">
              <GoalTarget title="Meta alcançada" value={monthGoal?.achieved} Icon={LiaAwardSolid} />
              <GoalTarget title="Meta do mês" value={monthGoal?.monthTotal} Icon={TbTargetArrow} />
            </div>

            {monthGoal?.monthTotal ? (
              <GoalGraphic achieved={monthGoal?.achieved} monthTotal={monthGoal?.monthTotal} />
            ) : (
              <div className="flex flex-col justify-center items-center">
                <p className="text-center text-default-black/80">Adicione o valor da sua meta mensal</p>
                <Button onClick={() => setIsOpen(true)}>Adicionar</Button>
              </div>
            )}
            {isOpen && <AddGoal setIsOpen={setIsOpen} />}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Goals;

