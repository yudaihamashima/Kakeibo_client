import { useNavigate } from 'react-router-dom'

import CreatePaymentsTemplate from '../templates/createPaymentTemplate'
import HeaderAppBar from '../molecules/headerAppBar'
import StyledButton from '../atoms/styledButton'

function CreatePaymentsPage () {
    const navigate = useNavigate()
    const movePage = () => {
        navigate("/main")
    }

    const menus = [
        { name: 'お支払い一覧', path: '/main' },
        { name: '分析', path: '/analysis' },
    ]

    return(
        <div>
            <HeaderAppBar
                title={'お支払い登録'}
                menus={menus}
            />
            <CreatePaymentsTemplate/>
            <StyledButton
                value={'一覧に戻る'}
                onClick={movePage}
                style={{ width: "100%" }}
            />
            
        </div>
    )
}

export default CreatePaymentsPage