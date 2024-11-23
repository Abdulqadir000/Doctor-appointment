// import DoctorAppointmentCard from "@/components/DoctorAppointmentCard/DoctorAppointmentCard";
// import { auth } from "../../../auth";
// import { getAppointments } from "@/actions/appointment";
// import AppointmentFilterTabs from "@/components/Tabs/Tabs";
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";
// import PatientAppointmentCard from "@/components/PatientAppointmentCard/PatientAppointmentCard";
// dayjs.extend(relativeTime);

// export default async function Appointments({ searchParams }) {
//   const session = await auth();

//   const { status } = searchParams;
//   console.log("session=>", session);
//   const { appointments, stats } = await getAppointments(
//     session.user.role == "doctor" ? "doctor" : "user",
//     session.user._id,
//     status
//   );
//   console.log("Appointments:", appointments);
//   const isDoctor = session.user.role == "doctor";
//   return (
//     <div className="container mx-auto">
//       <h1 className="font-bold text-2xl mt-10">
//         {isDoctor ? "Patients Appointments" : "Your Doctors Appointments"}
//       </h1>

//       <AppointmentFilterTabs status={status} />

//       <div className="flex gap-4">
//         <div className="shadow flex-grow p-3 rounded border">
//           <h1 className="font font-bold text-2xl">Pending : {stats.pending}</h1>
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
//               key={appointment._id}
//               appointment={appointment}
//             />
//           ) : (
//             <PatientAppointmentCard
//               key={appointment._id}
//               appointment={appointment}
//             />
//           )
//         )}
//       </div>
//     </div>
//   );
// }



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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h1 className="font-bold text-2xl sm:text-3xl mt-6 sm:mt-10 text-center sm:text-left">
        {isDoctor ? "Patients Appointments" : "Your Doctors Appointments"}
      </h1>

      {/* Filter Tabs */}
      <AppointmentFilterTabs status={status} />

      {/* Statistics Section */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="shadow flex-grow p-3 rounded border text-center">
          <h1 className="font-bold text-lg sm:text-2xl">Pending: {stats.pending}</h1>
        </div>
        <div className="shadow flex-grow p-3 rounded border text-center">
          <h1 className="font-bold text-lg sm:text-2xl">Accepted: {stats.accepted}</h1>
        </div>
        <div className="shadow flex-grow p-3 rounded border text-center">
          <h1 className="font-bold text-lg sm:text-2xl">Cancelled: {stats.cancelled}</h1>
        </div>
      </div>

      {/* Appointments Cards */}
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
