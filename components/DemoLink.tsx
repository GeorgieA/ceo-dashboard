import type { ComponentPropsWithoutRef } from "react";
import { DEMO_URL } from "@/lib/site";

type DemoLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href" | "target" | "rel"> & {
  href?: string;
};

export function DemoLink({ children, href = DEMO_URL, ...props }: DemoLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
