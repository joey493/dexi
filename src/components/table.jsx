import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Typography } from '@mui/material';
import { green } from '@mui/material/colors';

export default function BasicTable({users}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold', color:'text.secondary', textTransform: 'uppercase'}}>Name</TableCell>
            <TableCell sx={{fontWeight: 'bold', color:'text.secondary', textTransform: 'uppercase'}}>Title</TableCell>
            <TableCell sx={{fontWeight: 'bold', color:'text.secondary', textTransform: 'uppercase'}}>Status</TableCell>
            <TableCell sx={{fontWeight: 'bold', color:'text.secondary', textTransform: 'uppercase'}}>Rule</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(({cell, picture, name, email}) => (
            <TableRow
              key={cell}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"
                sx={{display: 'flex', alignItems: 'left', 
                gap: '1.2rem'}}
              >
                <Avatar alt='hello world' src={picture.thumbnail}/>
                <div className="name">
                  <Typography sx={{margin: 0}}>{name.first} {name.last}</Typography>
                  <Typography color='textSecondary'>
                    {email}
                  </Typography>
                </div>
              </TableCell>
              <TableCell align="left">
                <Typography sx={{margin: 0}}>title</Typography>
                <Typography color='textSecondary'>
                  Program
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <Typography sx={{ width:'fit-content', color:'success.dark', textTransform: 'capitalize' , bgcolor:green[100], padding: '.2em .7em', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold'}}>Active</Typography>  
              </TableCell>
              <TableCell align="left" sx={{fontWeight: 'bold', color:'text.secondary'}}>Admin</TableCell>
              <TableCell align="left" sx={{color: 'blue'}}>Edit</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}