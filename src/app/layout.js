import { Poppins } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/libs/redux/ReduxProvider';
import Header from '@/components/outlet/Header';
import Footer from '@/components/outlet/Footer';



const poppinsFont = Poppins({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Tinn',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppinsFont.className} antialiased scroll-smooth`}>
        <ReduxProvider>
          <Header/>
          {children}
          <Footer/>
          </ReduxProvider>
        </body>
    </html>
  );
}
