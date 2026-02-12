import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { Mic } from "@mui/icons-material";
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
export default function InputWithIcon() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", 
        mt: 4,                    
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: 2,
          px: 1,      
          width: '70%',
          height:50
        }}
      >
        <IconButton
          color="primary"
          aria-label="add"
          sx={{ p: 0.5, mr: 1 }} 
        >
          <AddIcon />
        </IconButton>
        <TextField
          variant="standard"
          placeholder="Add new task"
          fullWidth
          InputProps={{ disableUnderline: true }} 
        />
          <IconButton
          color="primary"
          aria-label="add"
          sx={{ p: 0.5, mr: 1 }} 
        >
          <Mic/>
        </IconButton>
        <GraphicEqIcon/>
      </Box>
    </Box>
  );
}
