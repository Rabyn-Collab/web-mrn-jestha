import React from 'react'
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
export default async function Employees() {
  const response = await axios.get('https://60f3af443cb0870017a8a007.mockapi.io/employees');

  const employees = response.data;
  return (
    <div>
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
