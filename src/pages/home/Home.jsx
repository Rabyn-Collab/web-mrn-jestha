import { Button } from "@material-tailwind/react";
import { useRef } from "react";


export default function Home() {

  const secRef = useRef();

  const scrollToSec = () => {
    secRef.current.scrollIntoView({
      behavior: "smooth"
    })
  }



  return (
    <div className="p-5 space-y-5">
      <Button onClick={scrollToSec}>Section 2</Button>


    </div>
  )
}
