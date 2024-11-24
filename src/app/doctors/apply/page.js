import DoctorForm from "@/components/ApplyForm";
import { auth } from "../../../../auth";

export default async function ApplyAsDoctor() {
  const session = await auth();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl mt-6 sm:mt-10 text-center">
        Apply as a Doctor
      </h1>
      <p className="text-sm text-gray-700 sm:text-base lg:text-lg my-4 sm:my-6 lg:my-8 text-justify lg:text-center">
        Apply as a Doctor in our platform. Join us to provide healthcare
        services and connect with patients. Fill out the form below to begin the
        process and contribute to improving healthcare accessibility.
      </p>
      <div className="bg-white shadow rounded p-4 sm:p-6 lg:p-8">
        <DoctorForm session={session} />
      </div>
    </div>
  );
}
