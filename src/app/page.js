import axios from "axios"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { Button } from "../components/ui/button";

export default async function Page() {
  const response = await axios.get('https://60f3af443cb0870017a8a007.mockapi.io/employees');

  const employees = response.data;

  return (
    <div className="p-5">

      {
        employees.map((employee) => {
          return <Card key={employee.id} className={"mb-5 max-w-[300px]"}>
            <CardHeader>
              <CardTitle>{employee.fullname}</CardTitle>
              <CardDescription>{employee.position}</CardDescription>
              <CardAction>{employee.age}</CardAction>
            </CardHeader>

            <CardFooter className={"flex justify-between"}>
              <Link href={`/employees/${employee.id}`}>Go to employee</Link>
              <Button size="sm">Remove</Button>
            </CardFooter>
          </Card>
        })
      }



    </div>
  )
}
