import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "../../auth";
import Image from "next/image";
import Link from "next/link";
export default async function Navbar() {
  const session = await auth();
  return (
    <div className="shadow-md py-3">
      <div className="flex container mx-auto justify-between">
        <Link href={"/"}>
          <h1 className="text-xl font-bold font-mono">Doctors</h1>
        </Link>
        {session ? (
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <Image
                  src={session?.user?.image}
                  alt="User Avatar"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
              </MenubarTrigger>
              <MenubarContent>
                <Link href={"/profile"}>
                  <MenubarItem>Profile</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href={"/appointments"}>
                  <MenubarItem>My Appointments</MenubarItem>
                </Link>

                <MenubarSeparator />
                <form
                  action={async () => {
                    "use server";
                    await signOut("google");
                  }}
                >
                  <Button variant={"outline"}>Logout</Button>
                </form>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <Link href={"/signin"}>
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
