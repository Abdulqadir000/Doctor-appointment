"use server";

import { revalidatePath } from "next/cache";

export async function addAppointment(data) {
  let add = await fetch(`${process.env.BASE_URL}api/appointment`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  add = add.json();

  return add;
}
