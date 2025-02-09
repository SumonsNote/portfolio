import "./globals.css";

export const metadata = {
  title: "John Doe - Developer Portfolio",
  description: "Full Stack Developer showcasing projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
