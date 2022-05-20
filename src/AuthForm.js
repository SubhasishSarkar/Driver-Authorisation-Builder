import { TextField } from "@mui/material"
import { useState } from "react"
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
const initailState = {
    driverName:"",
    driverLicenseNumber:"",
    ownerName:"",
    vehicleNumber:"",
    address:"",
    dateFrom:"",
    dateTo:""
}
export default function AuthForm(){

    const [state,setState]=useState(initailState)

    const handleChange = (e) =>{
        setState((prev)=>{
           return {
               ...prev,
              [e.target.name]: e.target.value
            } 
        })
    }

    const genrateAuth = (e)=>{
        e.preventDefault();
        console.log(state)
    }
    return(
            
                <Stack component="form" noValidate spacing={3} onSubmit={genrateAuth}>
                    <TextField 
                        id="outlined-basic" 
                        name="driverName" 
                        label="Driver Name" 
                        variant="outlined" 
                        value={state.driverName} 
                        onChange={handleChange}
                    />
                    
                    <TextField 
                        id="outlined-basic" 
                        name="driverLicenseNumber" 
                        label="License Number" 
                        variant="outlined" 
                        value={state.driverLicenseNumber}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="ownerName" 
                        label="Owner Name" 
                        variant="outlined" value={state.ownerName}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="vehicleNumber" 
                        label="Vehicle Number" 
                        variant="outlined" 
                        value={state.vehicleNumber} 
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="address" 
                        label="Address" 
                        variant="outlined" 
                        value={state.address}
                        onChange={handleChange}
                    />
                    <TextField
                        id="date"
                        label="Date From"
                        type="date"
                        name="dateFrom"
                        value={state.dateFrom}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={handleChange}
                    />
                    <TextField
                        id="date"
                        label="Date To"
                        type="date"
                        name="dateTo"
                        value={state.dateTo}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={handleChange}
                    />

                    <Button variant="outlined" size="medium" type="submit">Generate</Button>
                </Stack>
    )
}