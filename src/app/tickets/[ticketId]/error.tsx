"use client";

import PlaceholderComponent from "@/components/placeholder/placholder-component";

type ErrorProps = {
  error: Error;
};

export default function Error({ error }: ErrorProps) {
  return (
    <PlaceholderComponent
      title={error.message || "An error occured fetching ticket"}
    />
  );
}
