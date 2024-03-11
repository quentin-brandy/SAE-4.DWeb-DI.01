import './App.css';
import NavBar from './component/NavBar/NavBar.jsx';
import Footer from './component/Footer/Footer.jsx';
import Carrousel from './component/Carroussel/Carroussel.jsx';
import SearchBar from './component/SearchBar/SearchBar.jsx';
import Category from './component/Category/Category.jsx';
import Button from './component/Button/Button.jsx';
function App() {

  return (
   <>
   <div className='w-100%'>
<NavBar />
<Button padding="watch"> Mon bouton </Button>
<Button padding="watch"> Mon bouton </Button>
<Button padding="watch"> Mon bouton </Button>
<Footer />
</div>
   </>

  )
}

export default App
