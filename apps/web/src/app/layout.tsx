// Tailwind V3.x
import 'src/app/globals.css';

// React toastify
import 'react-toastify/dist/ReactToastify.css';

// Next Font
import { Roboto } from 'next/font/google';

// Page Meta data for SEO
export const metadata = {
  title: 'Md Irshad - 💫 Software Developer',
  description: 'My Personal Website'
};

// Poppin Font Settings
const roboto = Roboto({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
});

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
