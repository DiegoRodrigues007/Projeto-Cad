
import Menu from '../components/Menu/index';
import BannerPrincipal from '../components/BannerPrincipal/index';
import NossaHistoria from '../components/NossaHistoria';
import QuemSomos from '../components/QuemSomos';
import NossosProjetos from '../components/NossosProjetos';
import OngParceira from '../components/OngParceira';
import EmpresaParceira from '..//components/EmpresParceira';
import Footer from '../components/Footer'
import Doe from '../components/Doe';
export default function Home() {
  return (
    <>
    
        <Menu/>
        <BannerPrincipal/>
        <NossaHistoria/>
        <QuemSomos/>
        <NossosProjetos/>
        <Doe/>
        <OngParceira/>
        <EmpresaParceira/>
        <Footer/>
    </>
  )
}
