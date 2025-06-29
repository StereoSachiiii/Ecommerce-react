import { Link } from "react-router-dom"




const CategoryItems = () => {
  return (
    
    <div
     className='px-5 py-[100px] w-full h-screen overflow-y-scroll bg-[#f5f5f5]'>
        
    <Link to={`/category/categoryid/itemid`}><div><p>categoryitems</p></div></Link>
    </div>
  )
}

export default CategoryItems