import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="text-gray-600 my-10 body-font">
      <div className="container mx-auto flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-3/4 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-semibold sm:text-2xl text-2xl mb-4 text-gray-900">
            Appoint Your Doctor
            {/* <br className="hidden lg:inline-block" />
            readymade gluten */}
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <Link href={"/doctors/apply"}>
              <Button>Apply as a Doctor</Button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            height={400}
            width={400}
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
