import './HomePage.css'
import { Sidebar } from '../../components/sidebar/sidebar';

import React from 'react';
import { Grafico } from '../../components/Grafico/grafico';
import Tabela from '../../components/Tabela/tabela';

export function HomePage() {
    return (
        <>
        
            <div className='homepage-container'>
                <Sidebar>
                </Sidebar>
                <div className='homepage-principal'>
                    <Grafico>
                    </Grafico>
                  <Tabela>
                  </Tabela>
        
                
                </div>
            </div>
            
        </>
    );
}