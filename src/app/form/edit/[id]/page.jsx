import axios from 'axios';
import React from 'react'
import EditForm from '../../../../components/EditForm';





export default async function Page({ params }) {
  const { id } = await params;
  const response = await axios.get(`https://60f3af443cb0870017a8a007.mockapi.io/employees/${id}`);

  return (
    <div>

      <EditForm employee={response.data} />

    </div>
  )
}
