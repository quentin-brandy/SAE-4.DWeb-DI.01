import './App.css';
import NavBar from './component/NavBar/NavBar.jsx';
import Footer from './component/Footer/Footer.jsx';
import Carrousel from './component/Carroussel/Carroussel.jsx';
import SearchBar from './component/SearchBar/SearchBar.jsx';
import Category from './component/Category/Category.jsx';
function App() {

  return (
   <>
   <div className='w-100%'>
<NavBar />
<SearchBar />
<Footer />
</div>
   </>

  )
}

export default App
