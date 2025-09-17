

// export const revalidate = 5;
//export const dynamic = 'force-dynamic';

import { Suspense } from "react";
import Employees from "../components/Employees";
import Loading from "./loading";

export default function Page() {

  return (
    <div className="p-5">
      <h1>Hello Jee</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi minus repellat possimus ducimus animi molestias neque fugit fugiat optio? Vero non vitae, ea eveniet repudiandae repellat temporibus rem unde iste.</p>
      <Suspense fallback={<Loading />}>
        <Employees />
      </Suspense>





    </div>
  )
}
