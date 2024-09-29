import Cabecalho from '../../components/cabecalho';
import Faixa from '../../components/faixa';
import './index.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/index.jsx';

export default function App() {
  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <section className='slider'>
        <img src="/assets/images/clinica-odontologica.jpg" alt="" />
      </section>
      <div className="faixa">
        <h1>Nossos Serviços</h1>
      </div>
        ***slider de serviços***
      <section className='secao1'>
        <img src="/assets/images/foto.jpg" alt="" />
        <p>
        Na OdontoClarc, oferecemos cuidados odontológicos de qualidade superior, combinando tecnologia moderna e um atendimento caloroso. Nossa equipe especializada proporciona uma ampla gama de serviços, desde limpezas preventivas até tratamentos ortodônticos avançados, garantindo resultados duradouros e satisfatórios.        
        </p>
      </section>
      <section className='secao2'>
        <p>
        Na OdontoClarc, oferecemos cuidados odontológicos de qualidade superior, combinando tecnologia moderna e um atendimento caloroso. Nossa equipe especializada proporciona uma ampla gama de serviços, desde limpezas preventivas até tratamentos ortodônticos avançados, garantindo resultados duradouros e satisfatórios.        
        </p>
        <img src="/assets/images/foto.jpg" alt="" />
      </section>
      <Footer></Footer>
      
    </div>
  );
}

