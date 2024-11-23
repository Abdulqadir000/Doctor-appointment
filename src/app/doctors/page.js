import { getRequest } from "@/actions/requests";
import DoctorsSection from "../../components/DoctorsSection";

export default async function Doctors({params}) {
  const { requests } = await getRequest("accepted");
  console.log("requests=>", requests);

  return (
    <div>
      <DoctorsSection />
    </div>
  );
}
