"use client";

import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";

const Error = ({ error, reset }) => {
  return (
    <div className="h-screen flex-col-center gap-6">
      <h1 className="text-3xl font-medium">Something went wrong!</h1>
      <Button onClick={reset}>
        Try again
        <RotateCw />
      </Button>
    </div>
  );
};

export default Error;
