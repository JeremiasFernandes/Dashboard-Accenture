import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './tabela.css'
import dataContext from '../../context/data_context';







//estilizando tabela
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 17
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

//estiliza linha
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));








//componente tabela
export default function Tabela() {
    const data_context = React.useContext(dataContext) 
    const dados = data_context.dados;
  return (
    <div className='Tabela-container'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }}stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Data</StyledTableCell>
            <StyledTableCell align="right">Demanda</StyledTableCell>
            <StyledTableCell align="right">Capacidade</StyledTableCell>
            <StyledTableCell align="right">Atendimento planejado</StyledTableCell>
            <StyledTableCell align="right">Atendimento Realizado</StyledTableCell>
            <StyledTableCell align="right">Desvio</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dados.map((dado) => (
            <StyledTableRow key={dado.data}>
              <StyledTableCell component="th" scope="row">
                {dado.data}
              </StyledTableCell>
              <StyledTableCell align="right">{dado.demanda}</StyledTableCell>
              <StyledTableCell align="right">{dado.capacidade}</StyledTableCell>
              <StyledTableCell align="right">{dado.atendimento_planejado}</StyledTableCell>
              <StyledTableCell align="right">{dado.atendimento_realizado}</StyledTableCell>
              <StyledTableCell align="right">{dado.desvio}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}