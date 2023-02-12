import React from 'react';
import {TableContainer, Table, TableHead, TableBody, TableCell, Paper, TableRow} from "@mui/material";

function MuiTable() {
    return (
        <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
            <Table aria-label='simple table' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align='center'>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map(row => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border:0}}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align='center'>{row.email}</TableCell>
                        </TableRow>))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const tableData = [{
    "id": 1,
    "first_name": "Murvyn",
    "last_name": "Ollive",
    "email": "mollive0@yelp.com",
    "gender": "Male",
    "ip_address": "144.18.184.99"
}, {
    "id": 2,
    "first_name": "Vasili",
    "last_name": "Gilliver",
    "email": "vgilliver1@opera.com",
    "gender": "Male",
    "ip_address": "252.253.9.137"
}, {
    "id": 3,
    "first_name": "Alanson",
    "last_name": "Order",
    "email": "aorder2@narod.ru",
    "gender": "Male",
    "ip_address": "119.0.31.89"
}, {
    "id": 4,
    "first_name": "Eduard",
    "last_name": "Gaddie",
    "email": "egaddie3@reuters.com",
    "gender": "Polygender",
    "ip_address": "8.120.77.13"
}, {
    "id": 5,
    "first_name": "Rachael",
    "last_name": "MacKain",
    "email": "rmackain4@nymag.com",
    "gender": "Female",
    "ip_address": "43.182.163.86"
}, {
    "id": 6,
    "first_name": "Hulda",
    "last_name": "Lambertson",
    "email": "hlambertson5@bizjournals.com",
    "gender": "Female",
    "ip_address": "234.40.139.250"
}, {
    "id": 7,
    "first_name": "Georgiana",
    "last_name": "Lisciardelli",
    "email": "glisciardelli6@csmonitor.com",
    "gender": "Female",
    "ip_address": "23.235.217.97"
}, {
    "id": 8,
    "first_name": "Marshall",
    "last_name": "Illesley",
    "email": "millesley7@merriam-webster.com",
    "gender": "Male",
    "ip_address": "8.204.194.163"
}, {
    "id": 9,
    "first_name": "Hurley",
    "last_name": "Dober",
    "email": "hdober8@omniture.com",
    "gender": "Male",
    "ip_address": "26.164.149.110"
}, {
    "id": 10,
    "first_name": "Allan",
    "last_name": "Carrodus",
    "email": "acarrodus9@forbes.com",
    "gender": "Male",
    "ip_address": "143.226.236.251"
}];


export default MuiTable;
