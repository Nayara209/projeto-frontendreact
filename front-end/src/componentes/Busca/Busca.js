// import React from "react";
// import { Container } from "./estilo";

// const Busca = (props) => {
//     const onChangeBuscaId = (e) => {
//         props.setBuscaId(e.target.value);
//         console.log(e.target.value);
//       };
    
//       const onChangeBuscaNome = (e) => {
//         props.setBuscaNome(e.target.value);
//       };
    
//       const onChangeOrdenar = (e) => {
//         props.setOrdenar(e.target.value);
//       };
//       return (
//         <Container>
//           <input
//             type="number"
//             placeholder="Buscar por id"
//             onChange={onChangeBuscaId}
//             value={props.buscaId}
//           />
//           <input
//             type="text"
//             placeholder="Buscar por nome"
//             onChange={onChangeBuscaNome}
//             value={props.buscaNome}
//           />
//           <select onChange={onChangeOrdenar}>
//             <option value="">Ordenar</option>
//             <option value="crescente">Crescente</option>
//             <option value="decrescente">Decrescente</option>
//           </select>
//         </Container>
//   );
// };

// export default Busca;