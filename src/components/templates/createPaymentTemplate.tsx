import { useRecoilValue } from 'recoil'
import { Grid, Paper, Typography } from '@mui/material'
 
//表示データ（お支払いデータ）
import { paymentState } from '../../recoil/atoms'
import { clickedDateState } from '../../recoil/atoms'
import CrudUnitTable from '../organisms/crudUnit/crudUnitTable'

//カレンダー（FullCalendar）
import PaymentCalender from '../organisms/calender/paymentCalender'

function CreatePaymentsTemplate () {
    const payments = useRecoilValue(paymentState)
    const clickedDate = useRecoilValue(clickedDateState)

    const month = (new Date(clickedDate)).getMonth()+1
    const day = (new Date(clickedDate)).getDate()

    //choose payment by day
    const PaymentsByDay = (date: string) => {
        const pickedPayments = payments.filter((payment) => 
            payment.date === date
        )
        return pickedPayments
    }

    return(
    <div style={{margin: '20px 0'}}>
        <Grid container spacing={2}>
            <Grid item xs={5}>
                <Paper style={{padding: '15px', margin: '5px'}} elevation={15}>
                    <PaymentCalender />
                </Paper>
            </Grid>
            <Grid item xs={7}>
                <Paper style={{padding: '15px' ,margin: '5px'}} elevation={15}>
                    <Typography
                        variant='h6'
                        style={{fontWeight: 'bold', textAlign: 'center'}}
                        marginBottom="10px"
                    >
                        {month}月{day}日　の支払い
                    </Typography>
                    <CrudUnitTable
                        data={PaymentsByDay(clickedDate)}
                        columnNames={[ '金額', '名前', '項目', '支払い方法', '支払日', ]}
                    />
                </Paper>
            </Grid>
        </Grid>
    </div>
    )
}

export default CreatePaymentsTemplate