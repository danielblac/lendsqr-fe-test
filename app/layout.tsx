import type { Metadata } from "next";
import "./globals.scss";
import MUIProvider from "./material-ui/provider";
import { ReduxProvider } from "./redux/provider";
import MUIDatePickerProvider from "./material-ui-datepicker/provider";

export const metadata: Metadata = {
  title: "Lendsqr",
  description: "Interview Project By Daniel Egboro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <MUIProvider>
          <MUIDatePickerProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </MUIDatePickerProvider>
        </MUIProvider>
      </body>
    </html>
  );
}
