import { Grid,  Button,  Paper,  Typography, Box } from "@mui/material"
import { LoadingButton } from '@mui/lab';
import PasswordField from "./PasswordField";
import UsernameField      from "./UsernameField";
import { useEffect, useState }  from "react";
import { useNavigate } from "react-router-dom";


const forgoturl = "/api/forgot-password"

   


const ForgotPassword = ({logo}) => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [busy, setBusy] = useState(false);
    const [tips, setTips] = useState({text:"", error:false});
    const [page, setPage] = useState("/forgot-password")

    useEffect(() => {
            
        navigate(page)
    },[page])
    
    const ValidateForm = (username) => {
   
        return false;
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();

        setBusy(true)

        if (ValidateForm(username)){
            console.log(`Submitting Name ${username}`)
           
        }else{
            setTips({text: "Invalid username or password", error:true})
            setBusy(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                //sx = {{backgroundImage:`url(${background})` }}
            >
                <Paper elevation={10} sx={{
                    margin: "10px auto", 
                    height: "500px", 
                    width: "600px", 
                    padding:"50px", 
                    aling:"center"
                }}>
                
                <Grid container direction="column" aling="center">

                    <Grid item >
                        <img src={logo} alt="logo" height="80" style={{ padding: 5 }} />
                    </Grid>

                    <Grid item>
                        <Typography variant="h4" component="h1" gutterBottom>Reset password</Typography>
                    </Grid>
                    
                    <Grid item>
                        <UsernameField value={username} onChange={e=>setUsername(e.target.value)} error={tips.error}/>
                    </Grid>

                    
                    
                    <Grid item>

                        <LoadingButton type="submit" 
                                fullWidth 
                                color="primary" 
                                variant="contained"
                                loading = {busy}
                                sx={{margin: "20px auto"}}>
                            Reset password
                        </LoadingButton>

                    </Grid>

                    <Grid item>
                        <Button fullWidth type="text" onClick={()=>setPage("/")} > Back to login </Button>
                    </Grid>
                
                
                </Grid>   
            </Paper>
        </Box>
    </form>   
    )

}


export default ForgotPassword;