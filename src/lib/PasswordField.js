import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";
import { useState } from "react";


const PasswordField = ({value, onChange, error, help}) => {

    const [showPassword, setShowPassword] = useState(false);
    const handleChange= () => {setShowPassword(!showPassword)}

    return (<TextField 

        
        type= {showPassword?"text":"password"}
        
        label="Password" 
        name="password"
        variant="outlined" 
        fullWidth value={value}
        onChange={onChange}
        helperText= {help}
        error= {error}//{loginError.error}
        autoFocus
        margin="dense"
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <Tooltip title={showPassword ? "Hide password" : "Show password"}>                                
                        <IconButton onClick={handleChange}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </Tooltip>
                </InputAdornment>
                
            ),
        }}
    
    />)
}

export default PasswordField;