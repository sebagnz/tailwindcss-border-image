import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Section = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<"section">) => (
  <section className={twMerge("bg-white p-10", className)} {...rest} />
);
