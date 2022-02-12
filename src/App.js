import './styles/index.css';
import Navbar from './components/navbar';
import AssetClasses from './components/AssetClasses';
import Header from './components/Header';
import MidSection from './components/MidSection';
import RiseApp from './components/RiseApp';
import Regulations from './components/Regulations';
import Testimonials from './components/Testimonials';
import Community from './components/Community';
import DownloadRise from './components/DownloadRise';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <Navbar/>
     <Header/>
     <MidSection/>
     <AssetClasses/>
     <RiseApp/>
     <Regulations/>
     <Testimonials/>
     <Community/>
     <DownloadRise/>
     <Footer/>
    </div>
  );
}

export default App;
