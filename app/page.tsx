import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "./trpc/client";
import { json } from "zod";
import { caller } from "./trpc/server";

export default async function Home() {
  const data = await caller.hello({ text: "Lovable" });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      {JSON.stringify(data)}
    </div>
  );
}
