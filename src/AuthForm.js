import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import generateLetter from "./LetterGenerater";
import { Select } from "@mui/material";
import { MenuItem } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { FormLabel } from "@material-ui/core";
import Pdf from "react-to-pdf";
const initailState = {
  driverName: "",
  driverFatherName: "",
  driverLicenseNumber: "",
  driverAddress: "",
  ownerName: "",
  ownerRelation: "S/O",
  ownerGurdian: "",
  ownerAddress: "",
  ownerCast: "",
  vehicleNumber: "",
  dateFrom: "",
  dateTo: "",
};
export default function AuthForm() {
  const [state, setState] = useState(initailState);
  const [letter, setLetter] = useState("");
  const [generate, setGenerate] = useState(false);

  const ref = useRef("");

  useEffect(() => {
    const letter = generateLetter(state);
    setLetter(letter);
  }, [state]);

  const handleChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const genarateAuth = (e) => {
    e.preventDefault();
    //console.log(state);

    const letter = generateLetter(state);
    setGenerate(true);
    //console.log(letter);
  };
  return (
    <>
      {/* <Stack component="form" noValidate spacing={3} onSubmit={genrateAuth}> */}
      <FormControl style={{ width: "100%" }}>
        <Stack spacing={3}>
          {/* driver */}
          <FormLabel>Driver details</FormLabel>
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
            name="driverFatherName"
            label="Driver's Father Name"
            variant="outlined"
            value={state.driverFatherName}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            name="driverAddress"
            label="Driver Address"
            variant="outlined"
            value={state.driverAddress}
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

          {/* owner */}
          <FormLabel>Owner details</FormLabel>
          <TextField
            id="outlined-basic"
            name="ownerName"
            label="Owner Name"
            variant="outlined"
            value={state.ownerName}
            onChange={handleChange}
          />
          <Select
            name="ownerRelation"
            value={state.ownerRelation}
            onChange={handleChange}
          >
            <MenuItem key="S/O" value="S/O">
              S/O
            </MenuItem>
            <MenuItem key="W/O" value="W/O">
              W/O
            </MenuItem>
          </Select>

          <TextField
            id="outlined-basic"
            name="ownerGurdian"
            label="Owner Gurdian Name"
            variant="outlined"
            value={state.ownerGurdian}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            name="ownerAddress"
            label="Owner address"
            variant="outlined"
            value={state.ownerAddress}
            onChange={handleChange}
          />

          <FormLabel>Authorise details</FormLabel>
          <TextField
            id="outlined-basic"
            name="vehicleNumber"
            label="Vehicle Number"
            variant="outlined"
            value={state.vehicleNumber}
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
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={toPdf}
              >
                Generate Pdf
              </Button>
            )}
          </Pdf>
        </Stack>
      </FormControl>
      <div className="letter__container" ref={ref}>
        {letter}
      </div>
    </>
  );
}
