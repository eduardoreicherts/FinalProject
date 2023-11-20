import { useState } from "react";
import "./index.css";
import { categories } from "../../data/categories";

// Insira a prop onAdd.
export const InputArea = ({onAdd}) => {
  // Crie um state dateField iniciando com string vazia.
  const [dateField, setDateField] = useState('');
  // Crie um state categoryField iniciando com string vazia.
  const [categoryField, setCategoryField] = useState('');
  // Crie um state titleField iniciando com string vazia.
  const [titleField, setTitleField] = useState('');
  // Crie um state de valuefield começando com 0.
  const [valueField, setValueField] = useState(0);
  // Crie uma let categoryKeys que recebe o valor de Object.keys(categories);
  let categoryKeys = Object.keys(categories);
  /* 
    Crie uma função handleaddEvent.
    Dentro crie uma  let errors = [];
    Faça as verificações se os campos estão vazios. Caso esteja vazio dê um push em error com a mensagem de erro.
    Faça uma verificação se errors.length > 0, insira alert(errors.join("\n"));
    Se for false, no else chame a função onAdd passando o objeto com os valores dos inputs e chame a função clearFields.
  */
  const handleaddEvent = () => {
    let errors = [];
    if (dateField === '') {
      errors.push("Preencha o campo Data");
    } else if (categoryField === '') {
      errors.push("Preencha o campo Categoria");
    } else if (titleField === '') {
      errors.push("Preencha o campo Titulo");
    } else if (valueField === 0) {
      errors.push("Preencha o campo Valor");
    };
    
    if (errors.length > 0) {
      alert(errors.join("/n"))
    } else {
      const data ={
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      }
      onAdd(data);
      clearField();
    };
  };
  // Crie uma função clearFields e limpe todos os campos do formulário.
  const clearField = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  };

  return (
    <div className="form-container">
      <label className="inputLabel">
        <div className="inputTitle">Data</div>
        {/*Crie um input do tipo date com value={dateField}. No onChange utilize (e) => setDateField(e.target.value).*/}
        <input type="date" value={dateField} onChange={(e) => setDateField(e.target.value)} />
      </label>
      <label className="inputLabel">
        <div className="inputTitle">Categoria</div>
        <select
          className="select"
          /*
             Insira no value o categoryField e no onChange  (e) => setCategoryField(e.target.value).
          */
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option></option>
            {/*
            Crie um map em categoryKeys.
            Dentro do map insira a tag <option  key={index} value={key}></option>.
            Dentro da tag insira {categories[key].title}.
        */}
          {categoryKeys.map((key, index) => {
            return (<option  key={index} value={key}>{categories[key].title}</option>);
          })}
          </>
        </select>
      </label>
      <label className="inputLabel">
        <div className="inputTitle">Título</div>
        {/*Crie um input  com value={titleField}. No onChange utilize (e) => setTitleField(e.target.value).*/}
        <input type="text" value={titleField} onChange={(e) => setTitleField(e.target.value)} />
      </label>
      <label className="inputLabel">
        <div className="inputTitle">Valor</div>
        {/*Crie um input do tipo number com value={valueField}. No onChange utilize (e) => setValueField(parseFloat(e.target.value)).*/}
        <input type="number" value={valueField} onChange={(e) => setValueField(parseFloat(e.target.value))} />
      </label>
      <label className="inputLabel">
        <div>&nbsp;</div>
        {/* Crie um button para adicionar os valores. No onclick chame a função handleAddEvent*/}
        <button onClick={handleaddEvent}>Add</button>
      </label>
    </div>
  );
};