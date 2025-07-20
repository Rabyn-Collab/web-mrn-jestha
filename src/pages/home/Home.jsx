import { Button } from "@material-tailwind/react";
import { useState } from "react"


export default function Home() {

  const [data, setData] = useState([]);


  const handleData = () => {
    setData((prev) => [...prev, 'hello']);
  }

  console.log(data);

  return (
    <div className="p-5">

      <Button onClick={handleData}>Click To Show Data</Button>

    </div>
  )
}
