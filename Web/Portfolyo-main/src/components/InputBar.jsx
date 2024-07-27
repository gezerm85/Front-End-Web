/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function InputBar({ handleChange, values, placeholder, type, name }) {
  return (
    <div className="flex flex-col ">
      <Box component="form" className=" " noValidate autoComplete="off">
        <TextField
          className="w-[400px] max-md:w-[300px] max-lg:w-[280px] "
          id={name}
          label={placeholder}
          variant="filled"
          value={values}
          onChange={handleChange}
          type={type}
          name={name}
          InputProps={{
            style: {
              color: "#1C1E53",
              backgroundColor: "#fff",
              borderWidth: 1,
            },
          }}
          InputLabelProps={{
            style: {
              color: "#1C1E53",
            },
          }}
          color="primary"
        />
      </Box>
    </div>
  );
}

export default InputBar;
