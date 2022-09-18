import {  
    TableContainer, 
    Table,
    TableHead, 
    TableBody, 
    TableCell,
    TableRow,
    Paper,
    Typography,
} from '@mui/material'
import { Grid } from '@mui/material'

import CrudEditDeleteUnit from '../../molecules/crudUnit/crudEditDeleteUnit'
import CrudAddUnit from '../../molecules/crudUnit/crudAddUnit'

const style = { margin: "0 auto", width: "100%" }

function CrudUnitTable(props: any) {
    const payments = props.data
    const columnNames = props.columnNames
    const propsStyle = props.style

    return(
        <Grid container>
            <Grid item xs={12}>
                <Paper style={{...style, ...propsStyle, marginBottom: "20px"}} elevation={5}>
                    <TableContainer component={Paper}>
                        <Table size={'small'}>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    {columnNames.map((columnName: any)=>(
                                        <TableCell align="center" sx={{fontSize: '0.5rem'}} key={columnName}>{columnName}</TableCell>
                                    ))}
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                                {payments.length !== 0 &&
                                    <TableBody>
                                        {payments.map((payment: any)=>(
                                            <CrudEditDeleteUnit payment={payment} key={payment.id}/>
                                        ))}
                                    </TableBody>
                                }
                        </Table>
                        {payments.length === 0 &&
                            <Typography
                                variant='h5'
                                style={{
                                    textAlign: "center",
                                    padding: "15px",
                                    fontWeight: "bold"
                                }}
                            >
                                支払いはありません
                            </Typography>
                        }
                    </TableContainer>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper style={{...style, ...propsStyle}} elevation={5}>
                    <TableContainer component={Paper}>
                        <Table size={'small'}>
                            <colgroup>
                                <col style={{width:'14%'}}/>
                                <col style={{width:'10%'}}/>
                                <col style={{width:'24%'}}/>
                                <col style={{width:'24%'}}/>
                                <col style={{width:'19%'}}/>
                            </colgroup>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    {columnNames.slice(0,columnNames.length-1).map((columnName: any)=>(
                                        <TableCell align="center" sx={{fontSize: '0.5rem'}} key={columnName}>{columnName}</TableCell>
                                    ))}
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <CrudAddUnit />
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </Grid>
    )  
}

export default CrudUnitTable