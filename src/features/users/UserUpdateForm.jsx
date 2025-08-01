import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { valSchema } from "./UserAddForm.jsx";
import { updateUser } from "./userSlice.js";


export default function UserUpdateForm() {
  const { id } = useParams();
  const { users } = useSelector((state) => state.userSlice);

  const user = users.find((user) => user.id === id);

  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div className="p-5">

      <Formik
        initialValues={{
          username: user.username,
          email: user.email,
          habits: user.habits,
          gender: user.gender,
          country: user.country,
          bio: user.bio
        }}
        onSubmit={(val) => {
          dispatch(updateUser({ ...val, id: user.id }));
          nav(-1);

        }}
        validationSchema={valSchema}
      >

        {({ handleChange, handleSubmit, touched, errors, values, setFieldValue }) => (
          <form onSubmit={handleSubmit} className="max-w-[400px] space-y-4">

            <div>
              <Input
                onChange={handleChange}
                value={values.username}
                label="Username" name="username" />
              {errors.username && touched.username && <h1 className="text-pink-700">{errors.username}</h1>}
            </div>
            <div>
              <Input
                onChange={handleChange}
                value={values.email}
                label="Email" name="email" type="email" />
              {errors.email && touched.email && <h1 className="text-pink-700">{errors.email}</h1>}
            </div>

            <div>
              <Typography>Select Your Habits</Typography>
              <Checkbox
                checked={values.habits.includes('dance')}
                onChange={handleChange}
                label='Dance' value={'dance'} name="habits" />
              <Checkbox
                onChange={handleChange}
                checked={values.habits.includes('sing')}
                label='Sing' value={'sing'} name="habits" />
              {errors.habits && touched.habits && <h1 className="text-pink-700">{errors.habits}</h1>}
            </div>
            <div>
              <Typography>Select Your Genders</Typography>
              <Radio
                checked={values.gender === 'male'}
                onChange={handleChange}
                label='Male' value={'male'} name="gender" />
              <Radio
                onChange={handleChange}
                checked={values.gender === 'female'}
                label='Female' value={'female'} name="gender" />
              {errors.gender && touched.gender && <h1 className="text-pink-700">{errors.gender}</h1>}
            </div>
            <div className="space-y-2">
              <Typography>Select Your Country</Typography>
              <Select
                value={values.country}
                onChange={(e) => setFieldValue('country', e)}
                label="Select Country" name="country">
                <Option value="Nepal">Nepal</Option>
                <Option value="India">India</Option>
                <Option value="China">China</Option>

              </Select>
              {errors.country && touched.country && <h1 className="text-pink-700">{errors.country}</h1>}
            </div>

            <div>
              <Textarea
                value={values.bio}
                label="Bio" onChange={handleChange} name="bio"></Textarea>
              {errors.bio && touched.bio && <h1 className="text-pink-700">{errors.bio}</h1>}
            </div>




            <Button type="submit">Submit</Button>

          </form>
        )}



      </Formik>

    </div>
  )
}
