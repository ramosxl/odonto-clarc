
import React, { useState } from 'react';
import './index.scss'; 
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';


export default function Servicos() {
  const [quantidadeVisivel, setQuantidadeVisivel] = useState(5); // Começa mostrando 5 itens
  const itens = ['Serviço 1', 'Serviço 2', 'Serviço 3', 'Serviço 4', 'Serviço 5', 'Serviço 6', 'Serviço 7', 'Serviço 8'];

  const verMais = () => {
    setQuantidadeVisivel(prev => Math.min(prev + 3, itens.length)); // Incrementa até o total de itens
  };

  const verMenos = () => {
    setQuantidadeVisivel(5); // Reseta para 5 itens
  };

  return (
    <div className="Servicos">
      <Cabecalho />
      <div className="faixa">
        <h1>Serviços</h1>
      </div>
      <div className="itens">
        <ul className="lista">
          {itens.slice(0, quantidadeVisivel).map((item, index) => (
            <li key={index} className="lista-item">
              {item}
            </li>
          ))}
          {quantidadeVisivel < itens.length && quantidadeVisivel === 5 && (
            <li className="lista-item ver-mais" onClick={verMais}>
              Ver mais
            </li>
          )}
          {quantidadeVisivel >= 8 && (
            <li className="lista-item ver-menos" onClick={verMenos}>
              Ver menos
            </li>
          )}
        </ul>
      </div>
      <Footer />
    </div>
  );
}




// export default function Servicos() {
//   return (
//     <div className="Servicos">
//       <Cabecalho></Cabecalho>
//       <div className="faixa">
//         <h1>Serviços</h1>
//       </div>
//       <div className="itens">
        
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// }


