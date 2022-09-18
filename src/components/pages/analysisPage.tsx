import { useNavigate } from 'react-router-dom'

import AnalysisTemplate from '../templates/analysisTemplate'
import HeaderAppBar from '../molecules/headerAppBar'
import StyledButton from '../atoms/styledButton'

function AnalysisPage () {
    const navigate = useNavigate()
    const movePage = () => {
        navigate("/main")
    }

    const menus = [
        { name: 'お支払い一覧', path: '/main' },
        { name: '新規登録', path: '/createPayment' },
        
    ]

    return(
        <div>
            <HeaderAppBar
                title={'分析'}
                menus={menus}
            />
            <AnalysisTemplate/>
            <StyledButton
                value={'一覧に戻る'}
                onClick={movePage}
                style={{ width: "100%" }}
            />
            
        </div>
    )
}

export default AnalysisPage