
import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux"


export default function UsersList() {

  const { users } = useSelector((state) => state.userSlice);

  console.log(users);

  return (
    <div className="p-5 grid grid-cols-4" >

      {users.map((user) => {
        return <div key={user.id}>
          <h1 className="font-bold">{user.username}</h1>
          <div>
            <p>{user.email}</p>
          </div>
          <div>
            <p>{user.country}</p>
          </div>
          <div>
            <p>{user.gender}</p>
          </div>
          <div className="flex gap-3">
            {user.habits.map((habit, i) => {
              return <p key={i}>{habit}</p>
            })}
          </div>

          <Typography color="brown">{user.bio}</Typography>


        </div>
      })}



    </div>
  )
}
