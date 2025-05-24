"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientRedirect({ to }: { to: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [to]);

  return null;
}
