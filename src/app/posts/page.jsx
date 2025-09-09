import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function Page() {
  return (
    <div>

      <h1>This is a post page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit nam pariatur vitae nisi, autem explicabo sapiente aspernatur dicta porro veritatis id ipsam facere officiis veniam rerum, voluptas minima adipisci.</p>

      <Button> <Link href={'/posts/100'}>Go to detail</Link></Button>

    </div>
  )
}
