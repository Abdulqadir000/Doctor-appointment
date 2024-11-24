import { Button } from "./ui/button";
import Link from "next/link";
import { getRequest } from "@/actions/requests";
import DoctorCard from "./DoctorCard";

export default async function DoctorsSection({ isHome }) {
  const { requests } = await getRequest("accepted");
  console.log("requests=>", requests);

  return (
    <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          Doctors You Need
        </h1>
        {isHome && (
          <Link href="/doctors">
            <Button>See All</Button>
          </Link>
        )}
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {requests.map((request) => (
          <DoctorCard key={request._id} request={request} isAdmin={false} />
        ))}
      </div>
    </div>
  );
}
