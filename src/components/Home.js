import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, phoneNo, email, leads, date, comments) {
    return { name, phoneNo, email, leads, date, comments };
}

const rows = [
    createData('Ashish Tiwari', 9140404980, "digital.prabhu@gmail.com", 3, "26-Aug", "after diwali"),
    createData('Aniket Dubey', 8140456980, "hasiya.poo@gmail.com", 2, "26-Aug", "free after noon"),
    createData('Ashish Mishra', 6240454980, "mishra.ashish@gmail.com", 1, "26-Aug", "before 6 pm"),
    createData('Sakshi kasera', 8444564980, "notgoogle.knowsme@gmail.com", 2, "26-Aug", "any time"),
    createData('Sejal Agarwal', 6354049809, "segal.agarwl@gmail.com", 3, "26-Aug", "any time"),
];

export default function Home() {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Ser.No</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Phone No</StyledTableCell>
                            <StyledTableCell>Email ID</StyledTableCell>
                            <StyledTableCell>Leads</StyledTableCell>
                            <StyledTableCell>Date</StyledTableCell>
                            <StyledTableCell>Comments</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {index}
                                </StyledTableCell>
                                <StyledTableCell>{row.name}</StyledTableCell>
                                <StyledTableCell>{row.phoneNo}</StyledTableCell>
                                <StyledTableCell>{row.email}</StyledTableCell>
                                <StyledTableCell>{row.leads}</StyledTableCell>
                                <StyledTableCell>{row.date}</StyledTableCell>
                                <StyledTableCell>{row.comments}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
