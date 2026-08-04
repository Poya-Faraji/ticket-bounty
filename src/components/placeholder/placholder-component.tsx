import { cloneElement, ReactElement } from "react";

import { LucideMessageSquareWarning } from "lucide-react";

type Props = {
  title: string;
  icon?: ReactElement<{ className?: string }>;
  returnBtn?: ReactElement;
};

export default function PlaceholderComponent({
  title,
  icon = <LucideMessageSquareWarning />,
  returnBtn,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-8">
      {cloneElement(icon, {
        className: "w-12 h-12",
      })}
      <p className="text-lg text-center">{title}</p>

      {returnBtn}
    </div>
  );
}
