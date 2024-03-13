import NavBar from '../component/NavBar/NavBar'
import Footer from '../component/Footer/Footer'
import { Outlet } from 'react-router-dom';
import Carrousel from '../component/Carroussel/Carroussel';
import SerieBanner from '../component/SerieBanner/SerieBanner';

export default function Root() {

  return (
    <>
<NavBar/>
<SerieBanner/>
<Outlet/> 
<Footer/>     
    </>
  );
}
