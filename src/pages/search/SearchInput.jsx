import { Button, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { useNavigate } from "react-router";

export default function SearchInput() {
  const nav = useNavigate();
  return (
    <div className="p-5">

      <Formik

        initialValues={{
          search: ''
        }}
        onSubmit={(val) => {
          nav(`/search?q=${val.search}`)

        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className="flex gap-5">

            <div className="w-[350px]">
              <Input
                label="Search Food"
                name="search"
                onChange={handleChange}
                value={values.search}
              />

            </div>
            <Button type="submit">Search</Button>

          </form>
        )}
      </Formik>

    </div>
  )
}
