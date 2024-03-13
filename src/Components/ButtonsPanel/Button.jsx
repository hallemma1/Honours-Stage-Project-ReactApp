import '../MainContent/MainContent.css'
import MaterialButton from '@mui/material/Button'
import Box from '@mui/material/Box';

const Button = ({ onClick, label }) => {

return (
    <div className="button-component">
        <Box
            sx={{
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
            height: '100%',
            }}
        >
            <MaterialButton
            className="button"
            variant="contained"
            size="large"
            sx={{ width: '80%', height: '80%', textTransform:'none'}}
            onClick={onClick}
            >
                {label}
            </MaterialButton>
        </Box>
    </div>
    
)}
export default Button;