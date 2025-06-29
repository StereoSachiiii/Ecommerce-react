import React from 'react'
import style from './loading.module.css'


const Loading = () => {
  return (
    <div className='relative top-0 left-0 w-screen h-screen
    flex items-center gap-10 justify-center flex-col bg-amber-50 z-[101]'>
      
            <div className={style.spinner}>

            </div><div>
    Loading
            </div>
            
        
    </div>
  )
}

export default Loading