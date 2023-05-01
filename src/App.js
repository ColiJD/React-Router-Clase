import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Page404 from './pages/Pages404';
import Header from './components/Header';
import Post from './pages/Post';
import Categoria from './pages/Categoria';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Router: es como funciona la libreria que por detras hay bastate programacion esto envuelve todo el sistema de rutas 
//Routes: Indica cuales son las rutas que vamos a usar pero solo indica un error que no exite una ruta inicial 
//Route: Empezamos a definir las rutas 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> --Path es la ruta  --Element es el props que se mostrara al iniciar la app
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/categoria/:id/*' element={<Categoria/>} />
        <Route path='*' element={<Page404 />} />   
      </Routes>
    </Router>
  );
}

export default App;
