import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import MovieFinded from './containers/MovieFinded';
import Login from './containers/Login';
import Register from './containers/Register';
import NoMatch from './containers/NoMatch';
import About from './containers/About';
import NewsCard from './components/NewsCard';
import NewsList from './containers/NewsList';
import NewsDetail from './components/NewsDetail';
import NewsListWorld from './containers/NewsListWorld';
import NewsHome from './containers/NewsHome';

function App(news) {
  return (
    <div className="App">
      <div><Navbar /></div>
      
      <Routes>
        <Route path="/" element={
          // <ProtectedRoute>
            <NewsHome />
          // </ProtectedRoute>
        } />
        <Route path="login" element={
          <ProtectedRoute loginOnly={false}>
            <Login />
          </ProtectedRoute>} />
        <Route path="register" element={
          <ProtectedRoute loginOnly={false}>
            <Register />
          </ProtectedRoute>} />
        <Route path="*" element={<NoMatch />} />
        
        <Route path="search/:movie" element={<MovieFinded/>}/>
        <Route path="about" element={<About/>} />
        
        <Route path="newscard" element={<NewsCard/>} />
        <Route path="newslist" element={<NewsList/>} />
        <Route path="newslistworld" element={<NewsListWorld/>} />
        <Route path="newsdetail/:uuid" element={
          <ProtectedRoute>
          <NewsDetail/>
          </ProtectedRoute>
        } />
        
        
        
      </Routes>
      <div><Footer/></div>
      
    </div>
  );
}


export default App;
