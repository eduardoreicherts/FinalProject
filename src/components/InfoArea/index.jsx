import { formatCurrentMonth } from "../../helpers/dateFilter";
import {ResumeItem} from "../ResumeItem";
import "./index.css";

// Insira as props que faltam.
export const InfoArea = ({ currentMonth, onMonthChange, income, expense, infoCount, filteredList }) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <div className="info-container">
      <div className="monthArea">
        <div className="monthArrow" onClick={() => {handlePrevMonth(); infoCount(filteredList)}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
        </div>
        <div className="monthTitle">{formatCurrentMonth(currentMonth)}</div>
        <div className="monthArrow" onClick={() => {handleNextMonth(); infoCount(filteredList)}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
        </div>
      </div>
      <div className="resumeArea">
        {/*
          Importe um ResumeItem paracada categoria: Receitas, Despesas e Balanço, declarando as props necessárias.
          No ResumeItem de Balanço, o value deve ser income-expense e a color fazer a verificação: income - expense < 0 ? "red" : "green"
        */}
        <ResumeItem title="Receita" value={income} color={"green"}/>
        <ResumeItem title="Despesa" value={expense} color={"red"}/>
        <ResumeItem title="Balanço" value={income-expense} color={income - expense < 0 ? "red" : "green"}/>
      </div>
    </div>
  );
};