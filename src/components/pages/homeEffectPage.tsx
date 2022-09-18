import pic0 from '../../images/IMG_7556.jpeg'
import pic1 from '../../images/IMG_7702.jpeg'
import pic2 from '../../images/IMG_7712.jpeg'

import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'
import Button from '@mui/material/Button'

import { paymentState } from '../../recoil/atoms'
import CrudUnitTable from '../organisms/crudUnit/crudUnitTable'

import 'swiper/css'
import 'swiper/css/pagination'
import "swiper/css/navigation"


import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

//import SwiperCore, { Navigation } from 'swiper'
//SwiperCore.use([Navigation])



function HomeEffectPage() {
    const [payments, setPayments] = useRecoilState(paymentState)
    const navigate = useNavigate()
    const buttonon = () => {
        navigate("/main")
    }


    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + "</span>"
        },
        type: "progressbar",
    }

    const style= {
        textAlign: "center" as "center", 
    }
    

    return(
        <>
            <h1>かっこいいエフェクト</h1>
            <Button onClick={buttonon}>始める</Button>
            <CrudUnitTable
                data={payments}
                columnNames={[ '金額', '名前', '項目', '支払い方法', '支払日', ]}
            />
            
            <Swiper
                pagination={{
                    type: "custom",
                    clickable: true,
                    renderBullet: function (index: number, className: string) {
                        return '<span style={{backgroundColor: "red"}} class="' + className + '">' + (index + 1) + "月</span>"
                    },
                }}
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide key={1} style={style}>
                    <div>
                        <img src={pic0} width="500px"/>
                        <h1>おいしい</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={2} style={style}>
                    <div>
                        <img src={pic1} width="500px"/>
                        <h1>おいしい</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={3} style={style}>
                    <div>
                        <img src={pic2} width="500px"/>
                        <h1>おいしい</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HomeEffectPage