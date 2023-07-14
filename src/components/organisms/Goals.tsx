import ContentName from "../atoms/ContentName";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface props {
  className?: string;
}

function Goals({ className }: props) {
  return (
    <div className={" flex flex-col " + className}>
      <ContentName>Objetivos</ContentName>
      <Card className=" px-3 py-2">
        <CardHeader className=" flex flex-row justify-between">
          <CardTitle>R$240</CardTitle>
          <CardDescription>Todas as contas</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Conta - Banco - R$ Saldo</p>
        </CardContent>
        <CardFooter>{"<- --------------------------------- ->"}</CardFooter>
      </Card>
    </div>
  );
}

export default Goals;

