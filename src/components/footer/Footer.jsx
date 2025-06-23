import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import IconButton from '@mui/material/IconButton';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CategoryOutlined } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white p-4 shadow-inner fixed bottom-0 w-full z-50 flex items-center justify-center">
      <IconButton >
       <FooterIcon Icon={HomeOutlinedIcon}/> 
      </IconButton>
      <IconButton>
        <FooterIcon Icon={CategoryOutlined} />  
      </IconButton>
      <IconButton>
        <FooterIcon Icon={AccountCircleIcon} />  
      </IconButton>
    </footer>
  );
};

export default Footer;

const FooterIcon=({Icon})=>(
     <IconButton 
     sx={
        {
            padding:'10px',
            borderRadius:'5px',
            color:'red',
        }
      }>
        <div>
            <Icon />
        <p className='text-xs'>Home</p> 
        </div>
    

    </IconButton>
)
   


