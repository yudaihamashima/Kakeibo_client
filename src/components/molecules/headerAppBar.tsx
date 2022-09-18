import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
    AppBar,
    IconButton,
    Toolbar,
    Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function HeaderAppBar(props: any) {
    const title = props.title
    const menus = props.menus
    const navigate = useNavigate()
    
    const movePage = (path: string) => {
        navigate(path)
    }
    
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    {title}
                </Typography>
                <div>
                    <IconButton
                        aria-haspopup="true"
                        onClick={handleClick}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {menus.map((menu: any) => (
                            <MenuItem onClick={()=>movePage(menu.path)} key={menu.name}>{menu.name}</MenuItem>
                        ))}
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default HeaderAppBar