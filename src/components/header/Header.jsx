import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

const Header = () => {
  return (
    <header className='drop-shadow-2xl fixed w-full p-5 bg-green-200 flex items-center justify-between'>
      {/* header left */}
      <div className='flex items-center'>
        <IconButton sx={{ color: 'red' }}>
          <MenuIcon sx={{ color: 'red' }} />
        </IconButton>

        <h1 className='text-sm font-bold ml-2'>
          Stereo <span className='text-red-400'>hearT</span>
        </h1>

        <div className='flex items-center rounded-full overflow-hidden ml-4'>
          <input
            type='text'
            className='ml-1 outline-none p-2 font-semibold text-sm w-40 bg-gray-200 rounded-full'
            placeholder='search'
          />
          <SearchIcon className='text-gray-400 ml-2' />
        </div>
      </div>

      {/* header right */}
      <IconButton>
        <ShoppingCartIcon />
      </IconButton>
    </header>
  );
};

export default Header;
