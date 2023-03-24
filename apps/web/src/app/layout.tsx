import 'src/app/globals.css';

// Next Font
import { Roboto } from '@next/font/google';

export const metadata = {
  title: 'Md Irshad - 💫 Software Developer',
  description: 'My Personal Website'
};

// Robot Font Settings
const roboto = Roboto({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
});

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en' className={roboto.className}>
      <body id='__next'>{children}</body>
    </html>
  );
}
