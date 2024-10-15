import Cabecalho from '../../components/cabecalho';
import Faixa from '../../components/faixa';
import './index.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/index.jsx';

export default function App() {
  return (
    <div className="App">
      <Cabecalho></Cabecalho>
        <img src="/assets/images/" alt="" />

      <Footer></Footer>
    </div>
  );
}


