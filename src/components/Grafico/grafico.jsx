import './grafico.css'
import React, { useContext } from "react";
import { Chart } from "react-google-charts";
import dataContext from '../../context/data_context';

//componente gráfico
export function Grafico(){
    //pega os dados do contexto de dados
    const data_context = useContext(dataContext)
    const data = data_context.dados;
    
    //formata os dados para o gráfico
    let data_limpo = [["Element", "Diferença", { role: "style" }]]
    for (let i = 0; i < data.length; i++){
        const diferenca = data[i].capacidade - data[i].atendimento_realizado;
        data_limpo.push([data[i].data,diferenca,"purple"])
    }

//informações do grafico
     const options = {
        title: data_context.nome,
        vAxis: { title: "Diferença" },
        hAxis: { title: "Datas" },
        seriesType: "bars",
        series: { 5: { type: "line" } },
      };
    return(
           <div className='Grafico'>
                <Chart 
                chartType="ColumnChart" 
                width="90%" 
                height="90%" 
                data={data_limpo}
                options={options}
                />
            </div>
    );
    
}