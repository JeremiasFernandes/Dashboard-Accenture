import { useContext } from 'react'
import dataContext from '../../context/data_context';
import './sidebar.css'



//componente sidebar
export function Sidebar(){
    const data_context = useContext(dataContext)
    return(
        <>
        <div className="sidebar">
            <div className='Titulo'>
                Dashboard Accenture
            </div>
            <div className='menu-item' onClick={()=>{
                    data_context.set_Dados(1);
            }}>
                Dados Tesouraria
            </div>
            <div className='menu-item' onClick={()=>{
                    data_context.set_Dados(2);
            }}>
                Dados Administrativo
            </div>
            <div className='menu-item' onClick={()=>{
                    data_context.set_Dados(3);
            }}>
                Dados Vendas
            </div>
            <div className='menu-item' onClick={()=>{
                    data_context.set_Dados(4);
            }}>
                Dados Internos
            </div>
        
        
        </div>

        
        </>
    )


}