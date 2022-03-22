import React, {useEffect, useState} from 'react'
import {cardsApi} from "../CardsApi/Api";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type packsType = {
    name: string
    cardsCount: number
    user_name: string
}

function createData(
    name: string,
    countCards: number,
    author: string,
) {
    return {name, countCards, author};
}


export const PacksList = () => {
    const [packs, setPacks] = useState<packsType[]>([]);
    const rows = packs.map(pack => createData(pack.name,pack.cardsCount,pack.user_name));
    const getCardsClick = () => {
        cardsApi.getCards().then(res => {
            setPacks(res.data.cardPacks)
        })
    }

    useEffect( () => {
        getCardsClick()
    }, []);


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Count Cards</TableCell>
                        <TableCell align="center">Author</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row,index) => (
                        <TableRow
                            key={`${row.name}_${index}`}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.countCards}</TableCell>
                            <TableCell align="center">{row.author}</TableCell>
                            <TableCell align="center">
                                <button style={{marginRight:'15px'}}>Delete</button>
                                <button style={{marginRight:'15px'}}>Edit</button>
                                <button style={{marginRight:'15px'}}>Learn</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


