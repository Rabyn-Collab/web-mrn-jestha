import { Button, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { useState } from "react"

export default function Home() {
  const [data, setData] = useState([]);

  return (
    <div className="p-5">

      <Formik
        initialValues={{
          title: ''
        }}
        onSubmit={(val, { resetForm }) => {
          console.log(val);
          resetForm();
        }}
      >
        {
          ({ handleChange, handleSubmit, values }) => (
            <form
              onSubmit={handleSubmit}
              className="max-w-[300px] space-y-4">
              <div>
                <Input
                  onChange={handleChange}
                  value={values.title}
                  name="title"
                  label="Title" />
              </div>
              <Button type="submit">Submit</Button>

            </form>
          )
        }



      </Formik>





    </div>
  )
}
