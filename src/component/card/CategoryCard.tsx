import React from 'react'
import type { IconType } from 'react-icons'
import { MdNavigateNext } from 'react-icons/md'

interface ActivityDetail {
    Icon:IconType
    categoryType:string
    noOfTask: string | null
    
}
const CategoryCard:React.FC<ActivityDetail> = ({Icon,categoryType,noOfTask}) => {
  return (
    <div className="bg-purple-200 text-black px-2 py-1 my-2 rounded-xl hover:bg-purple-300 transition-all duration-300">
        <div className="flex justify-between items-center ">
            <div className="flex gap-4 items-center py-3">
                <Icon className='w-6 h-6 text-purple-600'/>
                <div className="flex flex-col">
                  <p className='font-semibold'>{categoryType}</p>
                  <small>{noOfTask}</small>
                </div>
            </div>
            <div className="arr">
              <MdNavigateNext/>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard