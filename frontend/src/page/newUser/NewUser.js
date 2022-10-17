import "./NewUser.css";
import Box from '@mui/material/Box';
import Warpper from "../../Warpper/Warpper";
import {FormControl , FormLabel, FormControlLabel , Radio , RadioGroup ,TextField , Autocomplete, Button , Stack} from '@mui/material'
export default function NewUser() {
   const newUser = [
    { label: 'Yes' },
    { label: 'No' },
   ]
  return (  
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '35ch' },
    }}
    noValidate
    autoComplete="off"
  >
  <div>
    <Warpper/>
  </div>
    <div className="newUser">
    <h4 className="newUserTitle">New User</h4>
    <TextField
          id="outlined-Username"
          label="Username"
          placeholder="Via12"
          defaultValue=""
          size = "small"
        />
        <TextField
          id="outlined-Fullname"
          label="Fullname"
          defaultValue=""
          size = "small"
          placeholder="Via"
        />
        <TextField
          id="outlined-Password"
          label="Password"
          type="password"
          autoComplete="current-password"
          size = "small"
          placeholder="2424@~1124"
        />
        <TextField
          id="outlined-Email"
          label="Email"
          defaultValue=""
          size = "small"
          placeholder="@gmail.com"
        />
        <TextField
          id="outlined-Phone"
          label="Phone"
          type="number"
          size = "small"
          placeholder="052159521"
        />
        <TextField
          id="outlined-Address"
          label="Address"
          defaultValue=""
          size = "small"
          placeholder="Street"
        /> 
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <Autocomplete
  disablePortal
  id="combo-box-active"
  options={newUser}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Active" size="small" />}
/>
  <Stack direction = 'row' spacing ={2}>
  <Button variant="outlined" href="#" className="btn-create" size = 'large'>
        Create 
      </Button>
  </Stack>
      </div>
    </Box>
  );
}