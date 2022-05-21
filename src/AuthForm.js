import { Alert, TextField } from "@mui/material";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Letter from "./Letter";
import generateLetter from "./LetterGenerater";

import InputLabel from "@material-ui/core/InputLabel";
const initailState = {
  driverName: "",
  driverFatherName: "",
  driverLicenseNumber: "",
  driverAddress: "",
  ownerName: "",
  ownerRelation: "",
  ownerGurdian: "",
  ownerAddress: "",
  ownerCast: "",
  vehicleNumber: "",
  dateFrom: "",
  dateTo: "",
};
export default function AuthForm() {
  const [state, setState] = useState(initailState);

  const handleChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const genrateAuth = (e) => {
    e.preventDefault();
    console.log(state);

    const letter = generateLetter(state);
    alert(letter);
  };
  return (
    <>
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
          variant="outlined"
          value={state.ownerName}
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
        <div>
          <InputLabel htmlFor="age-native-simple">Age</InputLabel>
          <Select
            native
            value={state.age}
            onChange={handleChange}
            inputProps={{
              name: "age",
              id: "age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </div>

        <Button variant="outlined" size="medium" type="submit">
          Generate
        </Button>
      </Stack>
      <div>
        <Letter />
      </div>
    </>
  );
}
