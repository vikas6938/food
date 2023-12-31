import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      < Header />
      {children}
      <Footer />
    </>
  )
}