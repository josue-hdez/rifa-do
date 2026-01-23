"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <Button variant="link" onClick={() => router.back()}>
      <ArrowLeft />
      Back
    </Button>
  );
};

export default GoBackButton;
