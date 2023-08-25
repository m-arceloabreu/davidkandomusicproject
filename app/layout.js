import './globals.css'
import { Ranga, Roboto_Condensed } from 'next/font/google';


const ranga = Ranga({ 
  subsets: ['latin'],
  weight:'700',
  variable:'--font-ranga-bold'
});
const robotoCondensed = Roboto_Condensed({ 
  subsets: ['latin'],
  weight:'400',
  variable:'--font-roboto-condensed'
});

export const metadata = {
  title: 'David Kando Music',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ranga.variable} ${robotoCondensed.variable}`}>
      <body className={`font-roboto flex justify-center items-center min-h-screen`}>
        {children}
        </body>
    </html>
  )
}
