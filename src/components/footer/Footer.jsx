import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import IconButton from '@mui/material/IconButton';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CategoryOutlined } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 shadow-inner fixed bottom-0 h-[100px] w-full z-50 flex items-center justify-evenly mt-[20-px] ">
      <IconButton >
       <FooterIcon Icon={HomeOutlinedIcon} iconText={"home"}/> 
      </IconButton>
      <IconButton>
        <FooterIcon Icon={CategoryOutlined} iconText={"Category"} />  
      </IconButton>
      <IconButton>
        <FooterIcon Icon={AccountCircleIcon}  iconText={"Profile"} />  
      </IconButton>
    </footer>
  );
};

export default Footer;

const FooterIcon=({Icon,iconText})=>(
     <IconButton 
     sx={
        {
            padding:'10px',
            borderRadius:'5px',
            color:'red',
        }
      }>
        <div className='text-amber-50 hover:text-shadow-amber-200 transition-all duration-300'>
            <Icon />
        <p className='text-xs'>{iconText}</p> 
        </div>
    

    </IconButton>
)
   


