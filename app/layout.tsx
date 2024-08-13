import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
/*import './globals.css';
import localFont from 'next/font/local';

const MonaSansFont = localFont({
  src: '../public/assets/fonts/Mona-Sans.woff2',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={MonaSansFont.className}>
      <body>{children}</body>
    </html>
  );
}*/
