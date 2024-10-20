import Cabecalho from '../../components/cabecalho';
import Faixa from '../../components/faixa';
import './index.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/index.jsx';

export default function PreConsulta() {
  return (
    <div className="Pre">
      <Cabecalho></Cabecalho>
        <img src="/assets/images/odc-min" alt="" />

      <Footer></Footer>
    </div>
  );
}


