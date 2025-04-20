import { Poppins } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/libs/redux/ReduxProvider';
import Header from '@/components/outlet/Header';
import Footer from '@/components/outlet/Footer';
import Bubble from '@/components/outlet/Bubble';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';

const poppinsFont = Poppins({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Tinn',
  description: 'Tinn helps you improve your English skills with an AI-driven test generator, realistic practice exams, intelligent result analysis, and personalized learning paths.',
  keywords: [
    'English learning app',
    'AI English test generator',
    'English test prep',
    'TOEIC IELTS test creator',
    'Tinn app',
    'learn English with AI',
    'online English mock test'
  ],
  authors: [{ name: 'Ngo Van Tin', url: 'https://tinn.edu.vn/about' }],
  creator: 'Ngo Van Tin',
  themeColor: '#0F172A',
  openGraph: {
    title: 'Tinn.edu.vn - Smart English Learning App with AI',
    description: 'Effectively prepare for English tests with Tinn. Auto-generate exams tailored to your level, get instant result analysis, and track your learning progress with ease.',
    url: 'https://tinn.edu.vn',
    siteName: 'Tinn',
    images: [
      {
        url: 'https://res.cloudinary.com/djabzzjd4/image/upload/v1745139240/7ff22295-f67f-4057-a053-8938639fe315.png',
        width: 1200,
        height: 630,
        alt: 'Tinn - AI-powered English Learning App'
      }
    ],
    locale: 'vi_VN',
    type: 'website'
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppinsFont.className} scroll-smooth antialiased`}>
        <ReduxProvider>
          <SmoothScrollWrapper>
            <Header />
            {children}
            <Bubble />
            <Footer />
          </SmoothScrollWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
