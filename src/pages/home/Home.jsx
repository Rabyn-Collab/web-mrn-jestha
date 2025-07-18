import { NavLink, Outlet } from "react-router";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <h1 className="text-3xl font-bold">This is Home Page</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut, nobis, reprehenderit est atque consectetur vero et sit ipsa aspernatur maiores voluptates quae saepe alias soluta sequi ipsum dolorem quod!</p>


      <nav>
        <NavLink to={'/'}>Page1</NavLink>
        <NavLink to={'/page-2'}>Page2</NavLink>
      </nav>

      <Outlet />

    </div>
  )
}
