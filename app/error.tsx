"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-[90vh] flex justify-center items-center gap-2">
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()} variant={"outline"}>
        Try again
      </Button>
    </div>
  );
}
