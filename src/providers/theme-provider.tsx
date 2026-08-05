import { PropsWithChildren } from "react";

import { ThemeProvider as BaseThemeProvider } from "next-themes";

type Props = PropsWithChildren;

const ThemeProvider = ({ children }: Props) => {
  return (
    <BaseThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </BaseThemeProvider>
  );
};

export { ThemeProvider };
