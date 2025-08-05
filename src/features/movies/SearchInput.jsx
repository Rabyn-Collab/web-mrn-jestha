import { Button, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { useNavigate } from "react-router";

export default function SearchInput({ isHome, setSearchParams }) {
  const nav = useNavigate();
  return (
    <div className="p-5 " >

      <Formik
        initialValues={{
          search: ''
        }}
        onSubmit={(val, { resetForm }) => {

          if (isHome) {
            nav(`/search-movie?search=${val.search}`);
          } else {
            setSearchParams({ search: val.search });
          }
          resetForm();

        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form
            onSubmit={handleSubmit}
            className=" flex gap-5 max-w-[400px] ">

            <div className="grow-1" >
              <Input
                onChange={handleChange}
                name="search"
                value={values.search}
                label="movie-search" />
            </div>
            <Button type="submit">Submit</Button>


          </form>
        )}

      </Formik>

    </div>
  )
}
