import { PropsWithChildren, ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = PropsWithChildren & {
  className?: string;
  title: string;
  description: string;
  footer?: ReactNode;
};
const CardCompactComponent = ({
  className,
  title,
  description,
  footer,
  children,
}: Props): ReactNode => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}t</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>

      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export { CardCompactComponent };
