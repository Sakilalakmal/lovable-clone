"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "./trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("Inngest function invoked successfully!");
      },
    })
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <Button
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ text: "test@example.com" })}
      >
        Invoke Inngest
      </Button>
    </div>
  );
}
