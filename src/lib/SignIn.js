import { Grid,  Button,  Paper,  Typography, Box } from "@mui/material"
import { LoadingButton } from '@mui/lab';
import PasswordField from "./PasswordField";
import UsernameField      from "./UsernameField";
import { useEffect, useState }  from "react";
import { useNavigate } from "react-router-dom";

const loginurl = "/api/login"
const forgoturl = "/api/forgot-password"
const signupUrl = "/api/sign-up"

   


const Login = ({logo}) => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [busy, setBusy] = useState(false);
    const [tips, setTips] = useState({text:"", error:false});
    const [page, setPage] = useState("")



    useEffect(() => {

        navigate(page)

    },[page])

    const login = () => {
        return fetch(loginurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password})
        }).then(data => data.json()).catch(err => {
            //console.log(err)
            setBusy(false)
            return {error: true, msg: "Error connecting to server"}
        })
    }
    

    const ValidateForm = (username, password) => {

        if (username.length < 3 || password.length > 10){


            return false;
        }
       
        return true;
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();


        setBusy(true)

        if (ValidateForm(username, password)){
            console.log(`Submitting Name ${username} ${password}`)
            login().then(data => {
                console.log(data)
                if (data.error){
                    setTips({text: data.msg, error:true})
                }               
            })
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
                        <Typography variant="h4" component="h1" gutterBottom>Sign in</Typography>
                    </Grid>
                    
                    <Grid item>
                        <UsernameField value={username} onChange={e=>setUsername(e.target.value)} error={tips.error}/>
                    </Grid>

                    <Grid item>
                        <PasswordField value={password} onChange={e => setPassword(e.target.value)} error={tips.error} help={tips.text}/>
                    </Grid>

                    <Grid item>
                        <Button variant="text" onClick={()=>setPage("/forgot-password")} >Forgot my password</Button>
                    </Grid>
                    
                    <Grid item>

                        <LoadingButton type="submit" 
                                fullWidth 
                                color="primary" 
                                variant="contained"
                                loading = {busy}
                                sx={{margin: "20px auto"}}>
                            Confirm
                        </LoadingButton>

                    </Grid>

                    <Grid item>
                        <Button fullWidth type="text" onClick={()=>setPage("/sign-up")} > Create an account </Button>
                    </Grid>
                
                
                </Grid>   
            </Paper>
        </Box>
    </form>   
    )

}


export default Login;