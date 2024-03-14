import NavBar from '../component/NavBar/NavBar'
import Footer from '../component/Footer/Footer'
import { Outlet } from 'react-router-dom';
import Carrousel from '../component/Carroussel/Carroussel';
import SerieBanner from '../component/SerieBanner/SerieBanner';
import App from '../component/Carroussel/Carroussel';

export default function Root() {

  return (
    <>
<NavBar/>
<Carrousel/>
<Outlet/> 

    </>
  );
}
