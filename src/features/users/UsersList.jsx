import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "./userSlice.js";

export default function UsersList() {

  const { users } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  console.log(users);
  return (
    <div className="p-5">

      <Button onClick={() => dispatch(addUser(Math.floor(Math.random() * 100 + 1)))}>Add Number</Button>

      {users.map((user, i) => {
        return <h1 key={i}>{user}</h1>
      })}

    </div>
  )
}
