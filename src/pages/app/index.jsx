import Cabecalho from '../../components/cabecalho';
import './index.scss';


export default function App() {
  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <section className='slider'>
        <img src="/assets/images/clinica-odontologica.jpg" alt="" />
      </section>
    </div>
  );
}


