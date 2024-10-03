import Cabecalho from '../../components/cabecalho';
import Faixa from '../../components/faixa';
import Footer from '../../components/footer/index.jsx';
import './index.scss';


export default function QuemSomos() {
  return (
    <div className="QuemSomos">
      <Cabecalho></Cabecalho>

      <div className="faixa">
        <h1>Quem Somos</h1>
      </div>
      
      <div className='secao1'>
        <p>Na nossa clínica odontológica, fundamos nossa história em  superação e dedicação. Liderada pela Dra. Sheyla, nossa fundadora, transformamos desafios em  conquistas e oferecemos cuidados dentários com excelência e empatia. Com tecnologia avançada e uma abordagem personalizada, priorizamos o bem-estar de cada paciente e celebramos cada sorriso como uma vitória. Estamos aqui para cuidar de você com a paixão e o compromisso que definem nossa trajetória.</p>
        <img src="/assets/images/foto.jpg" alt="" />
      </div>
      <div className='secao2'>
        <p>Na nossa clínica odontológica, oferecemos uma ampla gama de serviços, desde exames e limpezas até tratamentos especializados como ortodontia e implantologia. Utilizamos tecnologia avançada para diagnósticos precisos e tratamentos eficazes, sempre priorizando o conforto e bem-estar dos pacientes. Nossa missão é proporcionar cuidados personalizados e de alta qualidade, garantindo um sorriso saudável e radiante para cada paciente.</p>
        <img src="/assets/images/foto.jpg" alt="" />
      </div>


      
      <Footer></Footer>
    </div>
  );
}


