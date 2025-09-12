import axios from "axios"

export async function generateStaticParams() {
  const response = await axios.get('https://60f3af443cb0870017a8a007.mockapi.io/employees');
  return response.data.map((employee) => {
    return { id: employee.id }
  })

}



export default async function Page({ params }) {
  const { id } = await params;
  const response = await axios.get(`https://60f3af443cb0870017a8a007.mockapi.io/employees/${id}`);
  const employee = response.data;
  return (
    <div className="p-5">

      <h1>{employee.fullname}</h1>
      <h1>{employee.position}</h1>
      <h1>{employee.age}</h1>

    </div>
  )
}
