import { TextField } from "@mui/material";



const UsernameField = ({value, onChange, error}) => {

    return <TextField 
        label="Username" 
        name="username"
        variant="outlined" 
        fullWidth 
        value= {value}
        onChange = { onChange }
        helperText = ""
        error={error} //True or false
        margin="dense"
    />

}

export default UsernameField;