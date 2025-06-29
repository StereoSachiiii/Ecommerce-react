import { IconButton } from '@mui/material'
import { Link, Links } from 'react-router-dom'
 
const categoryArray = [
    {
        imageUrl:'https://wallpaperaccess.com/full/187273.jpg',
        title:'laptop',
        categoryId:'category1'

    }, {
        imageUrl:'https://wallpaperaccess.com/full/187273.jpg',
        title:'desktop pc',
        categoryId:'category2'


    }, {
        imageUrl:'https://wallpaperaccess.com/full/187273.jpg',
        title:'vibrators',
        categoryId:'category3'


    }, {
        imageUrl:'https://wallpaperaccess.com/full/187273.jpg',
        title:'gaming mouse',
        categoryId:'category4'


    }, {
        imageUrl:'https://wallpaperaccess.com/full/187273.jpg',
        title:'accesories',
        categoryId:'category5'


    }, {
        imageUrl:'https://wallpaperaccess.com/full/187273.jpg',
        title:'furniture',
        categoryId:'category6'


    }, {
        imageUrl:'https://wallpaperaccess.com/full/187273.jpg',
        title:'groceries',
        categoryId:'category7'


    },
]

const Category = () => {
  return (
    
        <div className='px-5 py-[100px] w-full h-screen overflow-y-scroll bg-[#f5f5f5]
        ' >
            <div style={{
            boxShadow: 'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',

        }}
        className='w-full '>
                  <h3  className='text-sm font-bold text-stone-900'>Categories</h3>

            <div className='p-2 grid grid-cols-3  grid-rows-[auto] gap-5'>
           
            { categoryArray.map(({imageUrl,title,categoryId},index)=>{
                return(
                       <CategoryUnitItems key={index}
            imageUrl={imageUrl} title={title} 
            categoryId={categoryId}   />)}

                )
            }
                    
            </div>



            </div>

        </div>
   
  )
}

export default Category 

const CategoryUnitItems=({imageUrl,title})=>{
    return(
        <Link to={`/category/categoryid`}>
        <IconButton
        
        sx={{
            color:'gray',
            padding:'1px',
            borderRadius:'1px',
            
        }}
        
      >
             <div className='p-5 flex flex-col items-center w-full border-2 rounded-md '>
            <img src={imageUrl} alt="" className='rounded-md'/>
             <h2 className='text-xs text-black font-bold'>{title}</h2>
</div>
</IconButton> 
</Link>

        )
       }
   
 

    

