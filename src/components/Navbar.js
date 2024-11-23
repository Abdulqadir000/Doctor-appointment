import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "../../auth";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth();

  // Create the server action for logout
  async function logout() {
    "use server";
    await signOut();
  }

  const userInitials = session?.user?.name
    ? session.user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <nav className="border-b">
      <div className="flex h-16 container mx-auto items-center justify-between">
        <Link href="/" className="flex items-center">
          <h1 className="text-xl font-bold font-mono">Doctors</h1>
        </Link>

        {session ? (
          <Menubar className="border-0">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">
                <Avatar className="h-10 w-10">
                  {session.user?.image ? (
                    <AvatarImage
                      src={session.user.image}
                      alt={session.user.name || "User avatar"}
                    />
                  ) : null}
                  <AvatarFallback>{userInitials}</AvatarFallback>
                </Avatar>
              </MenubarTrigger>
              <MenubarContent align="end" className="w-48">
                <Link href="/profile" className="w-full">
                  <MenubarItem className="cursor-pointer">Profile</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/appointments" className="w-full">
                  <MenubarItem className="cursor-pointer">
                    My Appointments
                  </MenubarItem>
                </Link>
                <MenubarSeparator />
                <form action={logout}>
                  <button 
                  className="w-full text-left px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground cursor-default relative select-none rounded-sm"
                  >
                    Logout
                  </button>
                </form>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <Link href="/signin">
            <Button variant="default">Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
