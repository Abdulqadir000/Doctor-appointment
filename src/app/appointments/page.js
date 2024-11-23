import DoctorAppointmentCard from "@/components/DoctorAppointmentCard/DoctorAppointmentCard";
import { auth } from "../../../auth";
import { getAppointments } from "@/actions/appointment";
import AppointmentFilterTabs from "@/components/Tabs/Tabs";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PatientAppointmentCard from "@/components/PatientAppointmentCard/PatientAppointmentCard";
dayjs.extend(relativeTime);

export default async function Appointments({ searchParams }) {
  const session = await auth();

  const { status } = searchParams;
  console.log("session=>", session);
  const { appointments, stats } = await getAppointments(
    session.user.role == "doctor" ? "doctor" : "user",
    session.user._id,
    status
  );
  console.log("Appointments:", appointments);
  const isDoctor = session.user.role == "doctor";
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl mt-10">
        {isDoctor ? "Patients Appointments" : "Your Doctors Appointments"}
      </h1>

      <AppointmentFilterTabs status={status} />

      <div className="flex gap-4">
        <div className="shadow flex-grow p-3 rounded border">
          <h1 className="font font-bold text-2xl">Pending : {stats.pending}</h1>
        </div>
        <div className="shadow flex-grow p-3 rounded border">
          <h1 className="font font-bold text-2xl">
            Accepted : {stats.accepted}
          </h1>
        </div>
        <div className="shadow flex-grow p-3 rounded border">
          <h1 className="font font-bold text-2xl">
            Cancelled : {stats.cancelled}
          </h1>
        </div>
      </div>
      <div className="my-10 grid grid-cols-3 gap-4">
        {appointments?.map((appointment) =>
          isDoctor ? (
            <DoctorAppointmentCard
              key={appointment._id}
              appointment={appointment}
            />
          ) : (
            <PatientAppointmentCard
              key={appointment._id}
              appointment={appointment}
            />
          )
        )}
      </div>
    </div>
  );
}

// import { getAppointments } from "@/actions/appointment";
// import { auth } from "../../../auth";
// import DoctorAppointmentCard from "@/components/DoctorAppointmentCard/DoctorAppointmentCard";
// import PatientAppointmentCard from "@/components/PatientAppointmentCard/PatientAppointmentCard";
// import AppointmentFilterTabs from "@/components/Tabs/Tabs";

// export default async function Appointments({ searchParams }) {
//   const session = await auth();
//   console.log("session=>", session);
//   const { status } = searchParams;
//   const { appointments, stats } = await getAppointments(
//     session.user.role == "doctor" ? "doctor" : "user",
//     session.user._id,
//     status
//   );

//   const isDoctor = session.user.role == "doctor";
//   console.log("appointments=>", appointments);
//   return (
//     <div className="container mx-auto">
//       <h1 className="font-bold text-2xl my-3 mt-5">
//         {isDoctor ? "Patients Appointments" : "Doctor Appointments"}
//       </h1>
//       <AppointmentFilterTabs status={status} />

//       <div className="flex gap-4">
//         <div className="shadow flex-grow p-3 rounded border">
//           <h1 className="font font-bold text-2xl">
//             Pending : {stats.pending}
//             </h1>
//         </div>
//         <div className="shadow flex-grow p-3 rounded border">
//           <h1 className="font font-bold text-2xl">
//             Accepted : {stats.accepted}
//           </h1>
//         </div>
//         <div className="shadow flex-grow p-3 rounded border">
//           <h1 className="font font-bold text-2xl">
//             Cancelled : {stats.cancelled}
//           </h1>
//         </div>
//       </div>

//       <div className="my-10 grid grid-cols-3 gap-4">
//         {appointments?.map((appointment) =>
//           isDoctor ? (
//             <DoctorAppointmentCard
//               appointment={appointment}
//               key={appointment._id}
//             />
//           ) : (
//             <PatientAppointmentCard
//               appointment={appointment}
//               key={appointment._id}
//             />
//           )
//         )}
//       </div>
//     </div>
//   );
// }
