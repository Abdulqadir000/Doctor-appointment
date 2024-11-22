import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
<<<<<<< HEAD
import { categories, doctors } from "@/lib/doctorCategories";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HomeIcon, ClockIcon, PlusIcon } from "@radix-ui/react-icons";

export default function DoctorsSection({ isHome }) {
  const filtered = isHome ? doctors.slice(0, 6) : doctors;
=======
import { categories } from "@/lib/doctorCategories";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getRequest } from "@/actions/requests";
import DoctorCard from "./DoctorCard";

export default async function DoctorsSection({ isHome }) {
  const { requests } = await getRequest("accepted");
  console.log("requests=>", requests)

>>>>>>> 0f0d38c (book appointment)
  return (
    <div>
      <div className="container mx-auto flex justify-between my-18 mt-5">
        <h1 className="font-semibold text-3xl">Our Doctors</h1>
        {isHome ? (
          <Link href={"/doctors"}>
            <Button>See All</Button>
          </Link>
        ) : (
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-3 my-3">
<<<<<<< HEAD
        {filtered.map((doctor) => (
          <Card key={doctor.id}>
            <CardHeader className={"flex flex-row"}>
              <Avatar className="self-center h-10 w-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>DAS</AvatarFallback>
              </Avatar>
              <div className="pl-3">
                <CardTitle>{doctor.name}</CardTitle>
                <CardDescription>{doctor.category} </CardDescription>
              </div>
            </CardHeader>
            {!isHome && (
              <CardContent>
                <div className="flex justify-between my-2">
                  <div className="flex gap-2 items-center">
                    <HomeIcon />
                    <h1 className="font-semibold">Gender</h1>
                  </div>
                  <h1>{doctor.gender}</h1>
                </div>
                <div className="flex justify-between my-2">
                  <div className="flex gap-2 items-center">
                    <PlusIcon />
                    <h1 className="font-semibold">Hospital</h1>
                  </div>
                  <h1>{doctor.hospital}</h1>
                </div>
                <div className="flex justify-between my-2">
                  <div className="flex gap-2 items-center">
                    <ClockIcon />
                    <h1 className="font-semibold">Appointment Time</h1>
                  </div>
                  <h1>{doctor.appointmentTime}</h1>
                </div>
              </CardContent>
            )}
            <CardFooter>
              <Link href={`/doctors/${doctor.id}`}>
                <Button>See Detail</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
=======
       {
        requests.map((request) => (
          <DoctorCard key={request._id} request={request} isAdmin={false}/>
        ))
       }
>>>>>>> 0f0d38c (book appointment)
      </div>
    </div>
  );
}
