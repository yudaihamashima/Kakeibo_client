import { atom } from 'recoil'
import { Payment } from '../interface/payment'

const payments = [
    {
        cost: 1000,
        name: '買い物',
        category: '食費',
        payedBy: 'credit',
        date: '2022-07-01',
    },
    {
        cost: 2000,
        name: '買い物',
        category: '食費',
        payedBy: 'credit',
        date: '2022-07-01',
    },
    {
        cost: 3000,
        name: '買い物',
        category: '生活費',
        payedBy: 'cash',
        date: '2022-07-03',
    },
    {
        cost: 3500,
        name: '買い物',
        category: '生活費',
        payedBy: 'cash',
        date: '2022-08-03',
    },
    {
        cost: 3600,
        name: '買い物',
        category: '生活費',
        payedBy: 'cash',
        date: '2022-08-05',
    },
]

export const paymentState = atom<Payment[]>({
    key: 'paymentState',
    default: payments.map((payment: any, index: number) => (
    {
        id: index,
        cost: payment.cost,
        name: payment.name,
        category: payment.category,
        payedBy: payment.payedBy,
        date: payment.date,
        point: payment.payedBy === 'credit' ? payment.const*0.1 : 0,
        onEdit: false,
        editable: true,
    })),
})

//crud unit
export const newPaymentState = atom({
    key: 'newPayment',
    default: {
        id: null,
        cost: 0,
        name: '',
        category: '',
        payedBy: 'credit',
        date: '',
        point: 0,
        onEdit: false,
    }
})

//crud unit
export const editPaymentState = atom({
    key: 'editPayment',
    default: {
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
})

//calender unit
export const clickedDateState = atom({
    key: 'clickedDate',
    default: new Date().toLocaleString(),
})