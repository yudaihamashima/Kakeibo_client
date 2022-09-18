//addNewRow.tsx

import { Button } from '@mui/material'
import { Add } from '@mui/icons-material'

//変更するコンポーネント配列をインポート
import { useRecoilState } from 'recoil'
import { paymentState } from '../../../recoil/atoms'
import { newPaymentState } from '../../../recoil/atoms'

function AddNewPaymentButton(props: any) {
    const payment = props.payment
    const [payments, setPayments] = useRecoilState(paymentState)
    const [newPayment, setNewPayment] = useRecoilState(newPaymentState)

    const handleSubmit = () => {
        setPayments([
            ...payments,
            {
                ...payment, 
                id: payments.length, 
                point: payment.payedBy === 'credit' ? payment.const*0.1 : 0,
                onEdit: false,
                editable: true,
            }
        ])
        setNewPayment({
            id: null,
            cost: 0,
            name: '',
            category: '',
            payedBy: 'credit',
            date: '',
            point: 0,
            onEdit: false,
        })
    }

    return (
        <Button onClick={handleSubmit}>
            <Add fontSize="large" style={{outlineWidth: "2px"}}/>
        </Button>
    )
}

export default AddNewPaymentButton