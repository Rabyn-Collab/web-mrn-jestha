'use server';

import axios from "axios";
import { revalidatePath } from "next/cache";



export async function addEmployee(val) {

  try {
    await axios.post('https://60f3af443cb0870017a8a007.mockapi.io/employees', val);
    revalidatePath('/');

    return { success: true, message: 'Employee added successfully' }

  } catch (err) {

    return { success: false, message: err.message }

  }

}

export async function updateEmployee(id, val) {

  try {
    await axios.put(`https://60f3af443cb0870017a8a007.mockapi.io/employees/${id}`, val);
    revalidatePath('/');

    return { success: true, message: 'Employee updated successfully' }

  } catch (err) {

    return { success: false, message: err.message }

  }

}


export async function removeEmployee(id) {

  try {
    await axios.delete(`https://60f3af443cb0870017a8a007.mockapi.io/employees/${id}`);
    revalidatePath('/');

    return { success: true, message: 'Employee removed successfully' }

  } catch (err) {

    return { success: false, message: err.message }

  }

}