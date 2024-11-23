"use client";

import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function AppointmentFilterTabs({ status }) {
  const [activeFilter, setActiveFilter] = useState(status);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (activeFilter) {
      params.set("status", activeFilter);
    } else {
      params.delete("status");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [activeFilter]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {/* Pending */}
        <div
          className={`border-secondary cursor-pointer p-3 text-center border rounded ${
            activeFilter === "pending" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setActiveFilter("pending")}
        >
          Pending
        </div>

        {/* Accepted */}
        <div
          className={`border-secondary cursor-pointer p-3 text-center border rounded ${
            activeFilter === "accepted" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setActiveFilter("accepted")}
        >
          Accepted
        </div>

        {/* Rejected */}
        <div
          className={`border-secondary cursor-pointer p-3 text-center border rounded ${
            activeFilter === "cancelled" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setActiveFilter("cancelled")}
        >
          Rejected
        </div>

        {/* Upcoming */}
        <div
          className={`border-secondary cursor-pointer p-3 text-center border rounded ${
            activeFilter === "upcoming" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setActiveFilter("upcoming")}
        >
          Upcoming
        </div>

        {/* Past */}
        <div
          className={`border-secondary cursor-pointer p-3 text-center border rounded ${
            activeFilter === "past" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setActiveFilter("past")}
        >
          Past
        </div>
      </div>
    </div>
  );
}
