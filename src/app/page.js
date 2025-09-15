import axios from "axios"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { Button } from "../components/ui/button";
import RemoveButton from "../components/RemoveButton";
import { getServerSession } from "next-auth";
import { option } from "./api/auth/[...nextauth]/option";

//export const revalidate = 5;

export default async function Page() {
  const session = await getServerSession(option);

  // console.log(session?.user);


  const response = await axios.get('https://60f3af443cb0870017a8a007.mockapi.io/employees');

  const employees = response.data;

  return (
    <div className="p-5">

      {
        employees.map((employee) => {
          return <Card key={employee.id} className={"mb-5 max-w-[400px]"}>
            <CardHeader>
              <CardTitle>{employee.fullname}</CardTitle>
              <CardDescription>{employee.position}</CardDescription>
              <CardAction>{employee.age}</CardAction>
            </CardHeader>

            <CardFooter className={"flex justify-between"}>
              <Link href={`/employees/${employee.id}`}>Go to employee</Link>
              <div className="flex gap-4">
                <Link href={`/form/edit/${employee.id}`}> <Button size={"sm"} className={"bg-purple-500"}>Update</Button></Link>
                <RemoveButton id={employee.id} />

              </div>


            </CardFooter>
          </Card>
        })
      }



    </div>
  )
}
