import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../../auth";
import heroImage from "/assets/DALL.png";

async function HeroSection() {
  const session = await auth();

  return (
    <section className="text-gray-700 my-10">
      <div className="container mx-auto px-4 md:px-6 flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-3/4 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-semibold sm:text-2xl text-2xl mb-4 text-gray-900">
            Appoint Your Doctor
          </h1>
          <p className="mb-8 leading-normal sm:leading-relaxed text-sm sm:text-base lg:text-lg text-center md:text-left">
            Health is the foundation of happiness, and we’re here to make your
            wellness journey seamless. Book appointments with top-rated doctors
            in just a few clicks. Whether you need expert consultation, routine
            check-ups, or specialized care, our platform connects you with
            trusted professionals who are ready to prioritize your health. Your
            care, your convenience—schedule now and take the first step towards
            a healthier tomorrow!
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href={session ? "/doctors/apply" : "/signin"}>
              <Button>Apply as a Doctor</Button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            height={350}
            width={350}
            src={heroImage}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
