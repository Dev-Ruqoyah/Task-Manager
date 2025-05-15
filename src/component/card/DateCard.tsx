import dayjs from 'dayjs'
import React, { useState } from 'react'

interface Days{
    date:number
    day:string
}

const [day,setDay] = useState<string | [] | {}>()
const getfourDays = () =>{
    return Array.from({length:4}, (_,i) =>{
        const date = dayjs().add(i,'day')
        // setDay(date.format('D ddd'))
        const data = date.format('D ddd')
        const daaa  = [data]
        console.log(daaa);
        setDay(daaa)
        
        
    })
}

getfourDays()
console.log(day);


const DateCard= () => {
  return (
    
    <div className={`flex flex-col bg-${'bg-purple-600'} `}>
        
    </div>
  )
}

export default DateCard