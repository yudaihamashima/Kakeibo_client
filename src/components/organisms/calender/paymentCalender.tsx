import { useRecoilState } from 'recoil'
import { paymentState, editPaymentState, newPaymentState } from '../../../recoil/atoms'
import { clickedDateState } from '../../../recoil/atoms'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const emptyPayment = {
    id: null,
    cost: 0,
    name: '',
    category: '',
    payedBy: 'credit',
    date: '',
    point: 0,
    onEdit: false,
    editable: false,
}

function PaymentCalender() {
    const [ payments, setPayments ] = useRecoilState(paymentState)
    const [ clickedDate, setClickedDate ] = useRecoilState(clickedDateState)
    const [ editPayment, setEditPayment ] = useRecoilState(editPaymentState)
    const [ newPayment, setNewPayment] = useRecoilState(newPaymentState)

    //when date clicked
    const handleDateClick = (event: any) => {
        const pickedDate = event.dateStr
        setClickedDate(pickedDate)
        setPayments([
            ...payments.map((payment) => ({...payment, onEdit: false, editable: true}))
        ])
        setEditPayment(emptyPayment)
        setNewPayment({...newPayment, date: pickedDate})
    }

    //when payment clicked
    const handleEventClick = (event: any) => {
        console.log(event)
    }

    //input calender event
    const PaymentBars = () => {
        interface PaymentBar {
            title: string
            start: string
        }
        const paymentBars = [] as PaymentBar[] 
        payments.map((payment) => (
            paymentBars.push({
                title: payment.cost.toString()+'円 '+payment.name,
                start: payment.date
            })
        ))
        return paymentBars
    }

    return(
        <FullCalendar
            plugins={[interactionPlugin ,dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            locale="ja" 
            events={PaymentBars()}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            headerToolbar={{
                center: ''
            }}
            selectable={true}
        />       
    )

}

export default PaymentCalender