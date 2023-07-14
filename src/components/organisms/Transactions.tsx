import ContentName from "../atoms/ContentName";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface props {
  className?: string;
}

function Transactions({ className }: props) {
  return (
    <div className={" flex flex-col " + className}>
      <ContentName>Transações Recentes</ContentName>
      <Card className=" px-3 py-2 h-full">
        <CardHeader className=" flex flex-row justify-between">
          <CardTitle>Todas - Receita - Respesas</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Item ------------------ R$ Valor</p>
          <p>Item ------------------ R$ Valor</p>
          <p>Item ------------------ R$ Valor</p>
          <p>Item ------------------ R$ Valor</p>
          <p>Item ------------------ R$ Valor</p>
          <p>Item ------------------ R$ Valor</p>
          <p>Item ------------------ R$ Valor</p>
          <p>Item ------------------ R$ Valor</p>
        </CardContent>
        <CardFooter>{""}</CardFooter>
      </Card>
    </div>
  );
}

export default Transactions;

