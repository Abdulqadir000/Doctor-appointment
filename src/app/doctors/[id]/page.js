<<<<<<< HEAD
import { doctors } from "@/lib/doctorCategories";
import Image from "next/image";
import { HomeIcon, ClockIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/DatePicker";

export default function DoctorDetail({ params }) {

  const doctorInfo = doctors.find((doctor) => doctor.id == params.id);
  
  if (!doctorInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-500">
          Doctor not found.
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container py-10 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 relative w-full lg:h-auto h-64 object-cover object-center rounded">
            <Image
              fill={true}
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fHww"
            />
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {doctorInfo.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {doctorInfo.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>

            <div className="flex justify-between my-3">
              <div className="flex gap-2 items-center">
                <HomeIcon />
                <h1 className="font-semibold">Gender</h1>
              </div>
              <h1>{doctorInfo.gender}</h1>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex gap-2 items-center">
                <PlusIcon />
                <h1 className="font-semibold">Hospital</h1>
              </div>
              <h1>{doctorInfo.hospital}</h1>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex gap-2 items-center">
                <ClockIcon />
                <h1 className="font-semibold">Appointment Time</h1>
              </div>
              <h1>{doctorInfo.appointmentTime}</h1>
            </div>

            <div className="flex justify-between my-3">
              <div className="flex gap-2 items-center">
                <ClockIcon />
                <h1 className="font-semibold">Fees</h1>
              </div>
              <h1>${doctorInfo.fees}</h1>
            </div>

            <DatePicker />
            <Button className={"w-full"}>Book Your Appointment</Button>
          </div>
        </div>
=======
import Image from "next/image";
import {
  HomeIcon,
  ClockIcon,
  PlusIcon,
  UserIcon as GenderMaleIcon,
  GraduationCapIcon,
  StethoscopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSingleRequest } from "@/actions/requests";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DatePicker } from "@/components/DatePicker";
import { auth } from "../../../../auth";
import Link from "next/link";

export default async function DoctorDetail({ params }) {
  const session = await auth();
  const { requests } = await getSingleRequest(params.id);
  const doctorInfo = requests;

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-10 mx-auto">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
            <Avatar className="w-24 h-24">
              <AvatarImage
                src={doctorInfo.user.picture}
                alt={`${doctorInfo.user.firstName} ${doctorInfo.user.lastName}`}
              />
              <AvatarFallback>
                {doctorInfo.user.firstName[0]}
                {doctorInfo?.user?.lastName?.[0] || ""}
              </AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <CardTitle className="text-3xl font-bold">{`Dr. ${
                doctorInfo.user.firstName
              } ${doctorInfo?.user?.lastName || ""}`}</CardTitle>
              <p className="text-muted-foreground">
                {doctorInfo.specialization} Specialist
              </p>
            </div>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoItem
                icon={<GraduationCapIcon />}
                label="Degree"
                value={doctorInfo.degree}
              />
              <InfoItem
                icon={<StethoscopeIcon />}
                label="Experience"
                value={doctorInfo.experience}
              />
              <InfoItem
                icon={<GenderMaleIcon />}
                label="Gender"
                value={doctorInfo.gender}
              />
              <InfoItem
                icon={<PlusIcon />}
                label="Hospital"
                value={doctorInfo.hospital}
              />
              <InfoItem
                icon={<ClockIcon />}
                label="Appointment Time"
                value={doctorInfo.appointmentTime}
              />
              <InfoItem
                icon={<HomeIcon />}
                label="Fees"
                value={`$${doctorInfo.fees}`}
              />
              <InfoItem
                icon={<PhoneIcon />}
                label="Contact"
                value={doctorInfo.number}
              />
              <InfoItem
                icon={<MapPinIcon />}
                label="Address"
                value={doctorInfo.address}
              />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Bio</h3>
              <p className="text-muted-foreground">{doctorInfo.bio}</p>
            </div>
            <div className="space-y-4">
              <DatePicker session={session} request={params.id} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
>>>>>>> 0f0d38c (book appointment)
      </div>
    </div>
  );
}
