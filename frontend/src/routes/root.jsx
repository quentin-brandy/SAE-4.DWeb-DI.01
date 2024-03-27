import NavBar from '../component/NavBar/NavBar'
import Footer from '../component/Footer/Footer'
import { Outlet  , ScrollRestoration} from 'react-router-dom';
import Carrousel from '../component/Carroussel/Carroussel';
import SerieBanner from '../component/Serie/SerieBanner';

export default function Root() {

  return (
    <>
    <ScrollRestoration />
    <Outlet/>
<Footer/>

    </>
  );
}
