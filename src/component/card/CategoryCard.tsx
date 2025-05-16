import React from 'react'
import type { IconType } from 'react-icons'

interface ActivityDetail {
    icon:IconType
    categoryType:string
    noOfTask: string
    
}
const CategoryCard = () => {
  return (
    <div className="bg-purple-200 text-black px-2 py-3 my-2 rounded-xl hover:bg-purple-600 hover:text-white">
        <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard