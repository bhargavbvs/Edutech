import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Welcome from '../components/pages/Welcome';


const Login = () => {
  const [Username,setName] = useState("")
  const [Password,setPassword] = useState("")


  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  
  async function Login()
  {
      let item ={Username,Password}
      console.warn(item)

      let result = await fetch("http://711d-2600-8807-c0c4-300-e1dc-68bf-67dc-b13.ngrok.io/users/login/",{
          method: 'POST',
          body:JSON.stringify(item),
          headers:{
              "Content-Type": 'application/json',
              "Accept": 'application/json'
          }
      })
      result = await result.json()
    //   let result = {
    //     "ID": 10,
    //     "Username": "bhariojiojw",
    //     "Mobile": "+35278900990",
    //     "Email": "bvshbsdfds@gmailcom",
    //     "Password": "mypasios",
    //     "Paid": 0,
    //     "Search_left": 1,
    //     "Session_id": "akdhdfadsdfsddddsdffdfsafffk",
    //     "Created_at": "2022-04-19T21:42:52.532898-04:00",
    //     "Updated_at": "2022-04-19T21:42:52.532898-04:00",
    //     "Token": "",
    //     "Status": "Success"
    // }
    const values = []
    Object.keys(result).forEach(key => values.push({name: key, value: result[key]}))
    console.warn("values", values[1])
    let id = values[0].value
    let username = values[1].value
    if(values[11].value == "Success")
    {
      return (
        <div>
        <Welcome id={id} username={username}/>
        </div>
      );
    }
  }
  return (
    <Grid className="login">
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          onChange={(e) => {setName(e.target.value)}}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={(e) => {setPassword(e.target.value)}}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={Login}
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
