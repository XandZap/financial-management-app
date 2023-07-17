import ContentName from "../atoms/ContentName";
import Bill from "../molecules/Bill";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface props {
  className?: string;
}

function UpcomingBills({ className }: props) {
  return (
    <div className={" flex flex-col " + className}>
      <ContentName>Próximas Contas</ContentName>
      <Card className=" px-3 py-2 h-full">
        <Bill />
        <hr />
        <Bill />
      </Card>
    </div>
  );
}

export default UpcomingBills;

