
import {  Typography } from "@mui/material";



const MessageField = ({text, error}) => {

    return <Typography 
        variant="body2" 
        color={error?"error":"textSecondary"} 
        align="center" 
        sx={{mt:2}}
    >{text}</Typography>
}

export default MessageField;