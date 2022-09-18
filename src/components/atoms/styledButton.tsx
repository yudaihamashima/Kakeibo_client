import Button from '@mui/material/Button'

const style = {
    color: "white",
    fontWeight: "bold",
    background: "#fc8d03",
    boxShadow: 5,
    borderRadius: 3,
    "&:hover": {background: "#ffbd6b"},
    "&:active": {
        position: "relative",
        top: "2px",
        boxShadow: "none"    
    },
}

function StyledButton (props: any) {

    return(
        <Button
            sx={{...style, ...props.style}}
            onClick={props.onClick}
        >
             {props.value}
        </Button>
    )
}

export default StyledButton