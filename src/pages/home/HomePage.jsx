import Header from "../../components/Header";
import Article from "./Article";
import DisplaySec from "./DisplaySec";


export default function HomePage() {
  return (
    <div>
      <Header />
      <DisplaySec />
      <Article sec={true} />
      <Article sec={false} />

    </div>
  )
}
