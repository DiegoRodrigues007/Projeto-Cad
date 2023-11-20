
import { Inter } from 'next/font/google'
import Menu from '../components/Menu/index';
import BannerPrincipal from '../components/BannerPrincipal/index';
import  Head  from 'next/document';


export default function Home() {
  return (
    <>
    
        <Menu/>
        <BannerPrincipal/>
    
    </>
  )
}
