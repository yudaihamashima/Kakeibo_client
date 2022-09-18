import { useNavigate } from 'react-router-dom'

import MainTemplate from '../templates/mainTemplate'
import HeaderAppBar from '../molecules/headerAppBar'
import StyledButton from '../atoms/styledButton'

function MainPage () {
    const navigate = useNavigate()
    const movePage = () => {
        navigate("/createPayment")
    }

    const menus = [
        { name: '新規登録', path: '/createPayment' },
        { name: '分析', path: '/analysis' },
    ]

    return(
        <div>
            <HeaderAppBar
                title={'お支払い一覧'}
                menus={menus}
            />
            <MainTemplate/>
            <StyledButton
                value={'お支払いを登録する'}
                onClick={movePage}
                style={{ width: "100%" }}
            />
            
        </div>
    )
}

export default MainPage