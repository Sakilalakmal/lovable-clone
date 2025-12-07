import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-7xl text-center text-violet-500">
      <Button variant={"secondary"} className="cursor-pointer">
        Get Started with Lova
      </Button>
    </div>
  );
}
