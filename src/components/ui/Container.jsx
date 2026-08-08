import { cn } from "../../lib/utils";

export default function Container({ as: Tag = "div", className, children }) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)}>
      {children}
    </Tag>
  );
}
