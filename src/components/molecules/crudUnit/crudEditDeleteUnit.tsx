import {  
    TableRow, 
    TableCell,
} from '@mui/material'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import { getDtateStringJP } from '../../../util/dateType'

// import from ../atoms/crudUnit
import EditDeleteButton from "../../atoms/crudUnit/editDeleteButton"
import ChoosePayedByButton from "../../atoms/crudUnit/choosePayedByButton"
import ValueEditTextField from "../../atoms/crudUnit/valueEditTextField"

function CrudEditDeleteUnit(props: any) {
    const payment = props.payment

    return(
        <>
            {payment.onEdit ?
                <TableRow>
                    <TableCell>
                        <EditDeleteButton payment={payment} />
                    </TableCell> 
                    <TableCell>
                        <ValueEditTextField editElement={'cost'} payment={payment} />
                    </TableCell>
                    <TableCell>
                        <ValueEditTextField editElement={'name'} payment={payment} />
                    </TableCell>
                    <TableCell>
                        <ValueEditTextField editElement={'category'} payment={payment} />
                    </TableCell>
                    <TableCell>
                        <ChoosePayedByButton payment={payment} />
                    </TableCell>
                    <TableCell>
                        <ValueEditTextField editElement={'date'} payment={payment} />
                    </TableCell>
                </TableRow>
            :
                <TableRow>
                    <TableCell align="center">
                        <EditDeleteButton payment={payment} />
                    </TableCell> 
                    <TableCell align="right">
                        {payment.cost+" 円"}
                    </TableCell>
                    <TableCell align="center">
                        {payment.name}
                    </TableCell>
                    <TableCell align="center">
                        {payment.category}
                    </TableCell>
                    <TableCell align="center">
                        {payment.payedBy === 'credit' ? <CreditCardIcon/> : <MonetizationOnIcon/>}
                    </TableCell>
                    <TableCell align="center">
                        {getDtateStringJP(payment.date)}
                    </TableCell>
                </TableRow>
            }
        </>
    )
}

export default CrudEditDeleteUnit