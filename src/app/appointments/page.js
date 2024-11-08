import { columns } from "@/components/AppointmentTable/column";
import { AppointmentTable } from "@/components/AppointmentTable/data-table";
import { appointments } from "@/lib/doctorCategories";
export default function Appointments() {
  return (
    <div className="container mx-auto">
      <div className="my-10">
        <AppointmentTable columns={columns} data={appointments} />
      </div>
    </div>
  );
}
