//editDeleteButton.tsx

import { Button, ButtonGroup } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CheckIcon from '@mui/icons-material/Check';

//変更するコンポーネント配列をインポート
import { useRecoilState } from 'recoil'
import { paymentState } from '../../../recoil/atoms'
import { editPaymentState } from '../../../recoil/atoms'

function EditDeleteButton(props: any) {

    //変更するコンポーネント配列の全体を読み込む
    const [payments, setPayments] = useRecoilState(paymentState)
    const [editPayment, setEditPayment] = useRecoilState(editPaymentState)

    //削除ボタンに値の変更関数を設定
    const handleClickDelete = (payment: any) => {
        setPayments([
            ...payments.slice(0, payment.id).map((payment) => ({...payment, editable: true})),
            ...payments.slice(payment.id+1).map((payment)=>({...payment, id: payment.id-1, editable: true}))
        ])
        setEditPayment({
            id: null,
            cost: 0,
            name: '',
            category: '',
            payedBy: 'credit',
            date: '',
            point: 0,
            onEdit: false,
            editable: false,
        })
    }
    
    //編集ボタンに値（編集中かどうかを示すboolean値）の変更関数を設定
    const handleClickEdit = (payment: any) => {
        if (payment.onEdit === true) {
            setPayments([
                ...payments.slice(0, payment.id).map((payment) => ({...payment, editable: true})),
                {...editPayment, id:payment.id, onEdit: false},
                ...payments.slice(payment.id+1).map((payment) => ({...payment, editable: true}))
            ])
            setEditPayment({
                id: null,
                cost: 0,
                name: '',
                category: '',
                payedBy: 'credit',
                date: '',
                point: 0,
                onEdit: false,
                editable: false,
            })
        }
        if (payment.onEdit === false) {
            setPayments([
                ...payments.slice(0, payment.id).map((payment) => ({...payment, editable: false})),
                {...payment, onEdit: true},
                ...payments.slice(payment.id+1).map((payment) => ({...payment, editable: false}))
            ])
            setEditPayment(payment)
        }
    }

    return(
        <>
        {props.payment.editable
        ?
            <ButtonGroup>
                <Button 
                    onClick={()=>handleClickDelete(props.payment)}
                >
                    <DeleteIcon />
                </Button>
                <Button
                    onClick={()=>handleClickEdit(props.payment)}
                >
                    {props.payment.onEdit ? <CheckIcon/> : <EditIcon />} 
                </Button>
            </ButtonGroup> 
        :
            <ButtonGroup>
                <Button disabled>
                    <DeleteIcon />
                </Button>
                <Button disabled>
                    <EditIcon />
                </Button>
            </ButtonGroup> 
        }
        </>
          
    )
}

export default EditDeleteButton
