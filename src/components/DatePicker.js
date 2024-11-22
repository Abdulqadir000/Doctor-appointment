"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
<<<<<<< HEAD

export function DatePicker() {
  const [date, setDate] = React.useState(new Date());
=======
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { addAppointment } from "@/actions/appointment";
import { title } from "process";

export function DatePicker({ session, request }) {
  const [date, setDate] = React.useState(new Date());
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();
  const handleBookAppointment = async () => {
    let isDateInFuture = Date.now() < new Date(date);
    if (!isDateInFuture) {
      return toast({ title: "Please select a date in the future" });
    }
    setLoading(true);
    const obj = { user: session.user._id, request: request, date };
    const response = await addAppointment(obj);
    toast({
      title: response.msg,
    })
  };
>>>>>>> 0f0d38c (book appointment)

  return (
    <div className="my-4">
      <h1 className="font-semibold mb-3">Pick your appointment Date</h1>
      <Popover className={"w-full"}>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick appointment date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-ful p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
<<<<<<< HEAD
=======
      {session ? (
        <Button onClick={handleBookAppointment} className="w-full my-3">
          Book your appointment
        </Button>
      ) : (
        <Link className="w-full my-3" href={"/signin"}>
          <Button className="w-full">Login to Book your appointment</Button>
        </Link>
      )}
>>>>>>> 0f0d38c (book appointment)
    </div>
  );
}
