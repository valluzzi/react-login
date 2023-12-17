import { Grid,  Button,  Paper,  Typography, Box } from "@mui/material"
import { LoadingButton } from '@mui/lab';

import UsernameField      from "./UsernameField";
import { useEffect, useState }  from "react";
import { useNavigate } from "react-router-dom";


   


const SignUp = ({logo}) => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [busy, setBusy] = useState(false);
    const [tips, setTips] = useState({text:"", error:false});
    const [page, setPage] = useState("/sign-up")

    useEffect(() => {
            
        navigate(page)
    },[page, navigate])
    
   
    const handleSubmit = (evt) => {}
   

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
                    height: "100%", 
                    width: "600px", 
                    padding:"50px", 
                    aling:"center"
                }}>
                
                <Grid container direction="column" aling="center">

                    <Grid item >
                        <img src={logo} alt="logo" height="80" style={{ padding: 5 }} />
                    </Grid>

                    <Grid item>
                        <Typography variant="h4" component="h1" gutterBottom>Sign Up</Typography>
                    </Grid>
                    
                    <Grid item>
                        <UsernameField value={username} onChange={e=>setUsername(e.target.value)} error={tips.error}/>
                    </Grid>

                    <Grid item>
                        <UsernameField value={username} onChange={e=>setUsername(e.target.value)} error={tips.error}/>
                    </Grid>

                    <Grid item>
                        <UsernameField value={username} onChange={e=>setUsername(e.target.value)} error={tips.error}/>
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
                            Submit
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


export default SignUp;