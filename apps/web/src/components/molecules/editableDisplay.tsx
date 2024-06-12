import { useState } from "react";
import { TextField, Button } from "@mui/material";

export function EditableDisplay({text, type}: {text: string, type: string}) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [value, setValue] = useState(text);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleCancel = () => {
    setValue(text);
    setToggleEdit(false);
  }

  const validate = () => {
    if (type === "email") {

    }
  }

  const handleSubmit = () => {
    setToggleEdit(false);
  }

  return (
    <div>
      {!toggleEdit ? (
        <p onClick={() => setToggleEdit(!toggleEdit)}>{value}</p>
      ):(
        <>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            helperText={isDisabled && "This field must be according required"}
          />
          <Button onClick={() => handleSubmit()} disabled={isDisabled}>Submit</Button>
          <Button onClick={() => handleCancel()}>Cancel</Button>
        </>
      )}
    </div>
    
  )
}