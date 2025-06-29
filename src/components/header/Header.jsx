import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

const Header = () => {


const [isSearch,setIsSearch] = useState(false)







  return (
    <header className="bg-black text-white shadow-md z-50 drop-shadow-2xl  fixed top-0 w-full p-4 flex items-center justify-between">
      {/* Left side */}
      <div className="flex items-center">
        <IconButton>
          <MenuIcon className="text-white" />
        </IconButton>

        <h1 className="text-sm md:text-lg font-bold ml-2"
             style={
      {
        display:(window.innerWidth<640)?
         isSearch?
         'none':
         'inline-block':
         'inline block',
         transition:'all 400ms ease-in-out'
      }}
         >
          Stereo <span className="text-white">hearT</span>
        </h1>

        {/* Search bar - hidden on small screens */}
     <div className="flex items-center bg-black ml-4 px-2 rounded-full "
     style={{
      backgroundColor:window.innerWidth<640?isSearch?'oklch(20.5% 0 0)':'inherit':'oklch(20.5% 0 0)'
     }}>
  {/* Input hidden on small screens */}
  <input
    type="text"
    className=" outline-none p-1 text-sm w-32 md:w-48 bg-black text-white hidden sm:inline-block"
    placeholder="search"
    style={
      {
        display:(window.innerWidth<640)?
         isSearch?
         'inline-block':
         'none':
         'inline block',
      }
    }
  />
  <IconButton onClick={()=>{
    
    if(window.innerWidth<640){
      setIsSearch(!isSearch)
    }
  }}>
  <SearchIcon  className="text-gray-500 ml-1" />

  </IconButton>
</div>

      </div>

      {/* Right side */}
      <IconButton>
    <div className='rounded-full relative p-1'></div>
        <ShoppingCartIcon className="text-white" />
        <div className="absolute top-0 right-0 text-[13px] w-3 h-3  font-bold text-black bg-white rounded-full flex items-center  justify-center">2</div>
      </IconButton>
    </header>
  );
};

export default Header;
