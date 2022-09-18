export function getDtateStringJP (dateString: string) {
    var date = new Date(dateString)
    var year = date.getFullYear().toString()
    var month = (date.getMonth()+1).toString()
    var day = date.getDate().toString()

    return year + '年' + month + '月' + day + '日'
}

export function getDtateStringSlash (dateString: string) {
    var date = new Date(dateString)
    var year = date.getFullYear().toString()
    var month = (date.getMonth()+1).toString()
    var day = date.getDate().toString()

    if(date.getMonth()+1 < 10) {
        month = '0' + month
    }
    if(date.getDate() < 10) {
        day = '0' + day
    }

    return year + '-' + month + '-' + day
}


/*
const PaymentBars = (year: number, month: number) => {
    interface PaymentBar {
        title: string
        start: string
    }
    const paymentBars = [] as PaymentBar[] 
    const monthlyDays = (year: number, month: number) => { 
        const dayNum = (month: number) => {
            if([1,3,5,7,8,10,12].some(monthHas31day => monthHas31day === month)) {
                return 31
            } else {
                return 30
            }
        }
        const days = [...Array(dayNum(month))].map((_, index: number) => {
            if (month < 10) {
                if (index < 9) { return year + "-0" + month + "-0" + (index+1) }
                if (index >= 9) { return year + "-0" + month + "-" + (index+1) }
            }
            if (month >= 10) {
                if (index < 9) { return year + "-" + month + "-0" + (index+1) }
                if (index >= 9) { return year + "-" + month + "-" + (index+1) }
            }
        })
        return days
    }
    monthlyDays(year,month).map((day) => {
        const paymentsOfDay = payments.filter(payment => payment.date === day)
        paymentsOfDay.map((paymentOfDay) => {
            if(paymentOfDay !== null && paymentOfDay !== undefined) {
                paymentBars.push({
                    title: paymentOfDay.cost.toString()+'円',
                    start: paymentOfDay.date
                })
            }
        })
    })
    return paymentBars
}
*/