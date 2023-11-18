import TableItem from "../TableItem";
import "./index.css";
// Insira a prop list
export const TableArea = () => {
  /*
        Crie uma table com className="table".
        Crie uma thead.
        Crie uma tr e dentro dela insira os th para Data, Categoria, Título, Valor. Eles devem ter className="tableHeadColumn".
        Abaixo do fechamento do thead insira um tbody.
        Dentro do tbody faça um map em list e dentro do map chame o componente TasbleItem, passando as props necessárias.
      */
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="tableHeadColumn">Valor</th>
          <th className="tableHeadColumn">Data</th>
          <th className="tableHeadColumn">Categoria</th>
          <th className="tableHeadColumn">Título</th>
        </tr>
      </thead>
      <tbody>
        {List.map((key,value) => {
          <TableItem/>
        })}
      </tbody>
    </table>
  );
};

export default TableArea;