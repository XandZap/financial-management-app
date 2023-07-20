"use client";
import { useState } from "react";
import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import { ContentName } from "@/components/atoms";
import {
  Button,
  Card,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { AddGoal } from "@/components/molecules";
import { getGoals } from "@/utils/storageFunctions/storageGoals";
import { convertStringToReal } from "@/utils";

function Goals() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const goals = getGoals();

  return (
    <>
      <div className="flex justify-between mb-7 mx-10">
        <ContentName>Objetivos</ContentName>
        <Button className=" bg-primary" onClick={() => setIsOpen(true)}>
          Modificar
        </Button>
      </div>
      <Card className=" mx-10 min-h-[500px] max-md:min-h-full">
        <Table className=" ">
          {goals.length <= 0 && <TableCaption>Lista de metas mensais.</TableCaption>}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Mês</TableHead>
              <TableHead>Meta mensal</TableHead>
              <TableHead>Valor alcançado</TableHead>
              <TableHead>Concluiu</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {goals.map((goal) => (
              <TableRow key={goal.month + goal.achieved + goal.monthTotal}>
                <TableCell className="font-medium">{goal.month}</TableCell>
                <TableCell className="font-medium">{convertStringToReal(goal.monthTotal)}</TableCell>
                <TableCell className="font-medium">{convertStringToReal(goal.achieved)}</TableCell>
                <TableCell>
                  {goal.achieved >= goal.monthTotal ? (
                    <AiFillCheckCircle className="text-primary" />
                  ) : (
                    <AiOutlineCloseCircle className="text-red-700" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      {isOpen && <AddGoal setIsOpen={setIsOpen} />}
    </>
  );
}

export default Goals;

