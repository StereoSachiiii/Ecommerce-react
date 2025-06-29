import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import IconButton from '@mui/material/IconButton';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CategoryOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { Link, Links } from 'react-router-dom';



const Footer = () => {
  const [whoClicks, setWhoClicks] = useState({
    home: true,
    Category: false,
    Profile: false,
  });

  return (
    <footer className="bg-black text-white p-4 shadow-inner fixed bottom-0 h-[100px] w-full z-50 flex items-center justify-evenly">
      <FooterIcon clickFun={{ whoClicks, setWhoClicks }} Icon={HomeOutlinedIcon} iconText="home" />
      <FooterIcon clickFun={{ whoClicks, setWhoClicks }} Icon={CategoryOutlined} iconText="Category" />
      <FooterIcon clickFun={{ whoClicks, setWhoClicks }} Icon={AccountCircleIcon} iconText="Profile" />
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ Icon, iconText, clickFun }) => {
  const clickHandle = () => {
    const footerIconHandle = {
      home: false,
      Category: false,
      Profile: false,
    };
    footerIconHandle[iconText] = true;
    clickFun.setWhoClicks(footerIconHandle);
  };

  return (
    <Link to={iconText==="home"?'/':`/${String(iconText).toLowerCase()}`}>   
    <IconButton

      onClick={clickHandle}
      sx={{
        padding: '10px',
        borderRadius: '5px',
        color: 'white',
      }}
    >
      <div
        className="text-amber-50 hover:text-shadow-amber-200 transition-all duration-300"
        style={{
          borderBottom: clickFun.whoClicks[iconText] ? '2px solid white' : '',
        }}
      >
        <Icon />
        <p className="text-xs">{iconText}</p>
      </div>
    </IconButton>
    </Link> 
  );
};
