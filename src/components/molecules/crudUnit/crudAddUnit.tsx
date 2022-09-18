import {  
    TableRow, 
    TableCell,
} from '@mui/material'

// import from ../atoms/crudUnit
import ChoosePayedByButton from "../../atoms/crudUnit/choosePayedByButton"
import ValueEditTextField from "../../atoms/crudUnit/valueEditTextField"
import AddNewPaymentButton from '../../atoms/crudUnit/addNewPaymentButton'

import { useRecoilValue } from 'recoil'
import { newPaymentState } from '../../../recoil/atoms'

function CrudAddUnit() {
    const newPayment = useRecoilValue(newPaymentState)
    
    return(
        <TableRow>
            <TableCell align="center">
                <AddNewPaymentButton payment={newPayment} />
            </TableCell>
            <TableCell>
                <ValueEditTextField editElement={'cost'} payment={newPayment} />
            </TableCell>
            <TableCell>
                <ValueEditTextField editElement={'name'} payment={newPayment} />
            </TableCell>
            <TableCell>
                <ValueEditTextField editElement={'category'} payment={newPayment} />
            </TableCell>
            <TableCell>
                <ChoosePayedByButton payment={newPayment} />
            </TableCell>
        </TableRow>       
    )
}

export default CrudAddUnit
