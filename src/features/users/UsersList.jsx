
import { IconButton, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "./userSlice.js";
import { useNavigate } from "react-router";


export default function UsersList() {

  const { users } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <div className="p-5 grid grid-cols-4" >

      {users.map((user, index) => {
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

          <div className="flex justify-end gap-5">
            <IconButton
              onClick={() => nav(`/update-form/${user.id}`)}
              size="sm" color="green">
              <i className="fas fa-edit" />
            </IconButton>
            <IconButton
              onClick={() => dispatch(removeUser(index))}
              size="sm" color="pink">
              <i className="fas fa-trash" />
            </IconButton>
          </div>


        </div>
      })}



    </div>
  )
}
