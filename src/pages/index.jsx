
import { Inter } from 'next/font/google'
import Menu from '../components/Menu/index';
import BannerPrincipal from '../components/BannerPrincipal/index';
import  Head  from 'next/document';
import NossaHistoria from '../components/NossaHistoria';
import QuemSomos from '../components/QuemSomos';
import NossosProjetos from '../components/NossosProjetos';
import OngParceira from '../components/OngParceira';
import EmpresaParceira from '..//components/EmpresParceira';

export default function Home() {
  return (
    <>
    
        <Menu/>
        <BannerPrincipal/>
        <NossaHistoria/>
        <QuemSomos/>
        <NossosProjetos/>
        <OngParceira/>
        <EmpresaParceira/>
    
    </>
  )
}
