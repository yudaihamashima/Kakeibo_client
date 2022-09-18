//textEditField.tsx

import { TextField } from '@mui/material'

//変更するコンポーネント配列をインポート（元もあるrow＋新しいrow）
import { useRecoilState } from 'recoil'
import { newPaymentState } from '../../../recoil/atoms'
import { editPaymentState } from '../../../recoil/atoms'

function ValueEditTextField(props: any) {
    const payment = props.payment
    const editElement = props.editElement
    
    const keys = Object.keys(payment)
    const editElementKey = keys.find((key) => key === editElement)

    const [ newPayment, setNewPayment] = useRecoilState(newPaymentState)
    const [ editPayment, setEditPayment ] = useRecoilState(editPaymentState)


    //テキストフィールドで編集する要素分の条件分岐を用意
    const handleChange = (event: any) => {
        if(editElementKey === 'cost'){
            if(payment.id !== null){
                setEditPayment({ ...editPayment, cost: event?.target.value })
            } else {
                setNewPayment({ ...newPayment, cost: event?.target.value })
            }
        }
        if(editElementKey === 'name'){
            if(payment.id !== null){
                setEditPayment({ ...editPayment, name: event?.target.value })
            } else {
                setNewPayment({ ...newPayment, name: event?.target.value })
            }
        }
        if(editElementKey === 'category'){
            if(payment.id !== null){
                setEditPayment({ ...editPayment, category: event?.target.value })
            } else {
                setNewPayment({ ...newPayment, category: event?.target.value })
            }
        }
        if(editElementKey === 'date'){
            if(payment.id !== null){
                setEditPayment({ ...editPayment, date: event?.target.value })
            } else {
                setNewPayment({ ...newPayment, date: event?.target.value })
            }
        }
    }

    if(payment.id !== null) {
        if(editElementKey === 'cost') {
            return <TextField value={editPayment.cost} onChange={handleChange} InputProps={{ style: { fontSize: 5 } }}/>
        } else if(editElementKey === 'name') {
            return <TextField value={editPayment.name} onChange={handleChange} />
        } else if(editElementKey === 'category') {
            return <TextField value={editPayment.category} onChange={handleChange} />
        } else if (editElementKey === 'date'){
            return <TextField type="date" value={editPayment.date} onChange={handleChange} />
        } else {
            return <></>
        }
    } else {
        if(editElementKey === 'cost') {
            return <TextField value={newPayment.cost} onChange={handleChange} />
        } else if(editElementKey === 'name') {
            return <TextField value={newPayment.name} onChange={handleChange} />
        } else if(editElementKey === 'category') {
            return <TextField value={newPayment.category} onChange={handleChange} />
        } else if (editElementKey === 'date'){
            return <TextField type="date" value={newPayment.date} onChange={handleChange} />
        } else {
            return <></>
        }
    }
    
}

export default ValueEditTextField