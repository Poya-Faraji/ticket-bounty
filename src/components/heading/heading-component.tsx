import { Separator } from "@/components/ui/separator";


type Props = {
    title : string;
    description: string;
}

export default function HeadingComponent({title, description}: Props) {
  return (
    <>
      <div className="mt-8 w-[min(1200px,calc(100%-2rem))] mx-auto">
        <div className="pb-8">
          <h2 className="font-heading text-2xl font-bold">{title}</h2>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
        <Separator className="mx-auto w-[90%]" />
      </div>
    </>
  );
}
