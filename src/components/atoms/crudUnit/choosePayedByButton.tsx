//chooseFromTwoValue.tsx

import { Button, ButtonGroup } from "@mui/material"

//２択ボタンのアイコンをインストール
import CreditCardIcon from '@mui/icons-material/CreditCard'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'

//変更するコンポーネント配列をインポート
import { useRecoilState } from 'recoil'
import { newPaymentState } from '../../../recoil/atoms'
import { editPaymentState } from '../../../recoil/atoms'

//ボタンの選択・未選択時のデザイン
const choosedStyle = {
    color: "#474747", 
    background: "#fffa0f",
}
const notChoosedStyle = {
    color: "#d6d6d6",
    background: "#e8e8e8",
}

function ChoosePayedByButton(props: any) {
    const payment = props.payment

    //変更するコンポーネント配列の全体を読み込む
    const [newPayment, setNewPayment] = useRecoilState(newPaymentState)
    const [editPayment, setEditPayment] = useRecoilState(editPaymentState)

    //両方のボタンに値の変更関数を設定
    const handleClickCredit = (payment: any) => {
        if(payment.id !== null){
            setEditPayment({ ...editPayment, payedBy: 'credit' })
        } else {
            console.log('id=null')
            setNewPayment({ ...newPayment, payedBy: 'credit' })
        }
    }
    const handleClickCash = (payment: any) => {
        if(payment.id !== null){
            setEditPayment({ ...editPayment, payedBy: 'cash' })
        } else {
            console.log('id=null')
            setNewPayment({ ...newPayment, payedBy: 'cash' })
        }
    }

    return(
        <ButtonGroup>
            <Button 
                sx={ (payment.id !== null ? editPayment.payedBy : newPayment.payedBy) === 'credit' ? choosedStyle : notChoosedStyle }
                onClick={()=>handleClickCredit(payment)}
            >
                <CreditCardIcon />
            </Button>
            <Button
                sx={ (payment.id !== null ? editPayment.payedBy : newPayment.payedBy) === 'cash' ? choosedStyle : notChoosedStyle }
                onClick={()=>handleClickCash(payment)}
            >
                <MonetizationOnIcon />
            </Button>
        </ButtonGroup>   
    )
}

export default ChoosePayedByButton