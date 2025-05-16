import dayjs from 'dayjs'

// interface Days{
//     date:number
//     day:string
// }
// const[date,setDate] = useState<string[]>()
const arrayDate: string[] = [];

const getfourDays = () => {
    return Array.from({ length: 4 }, (_, i) => {
        const date = dayjs().add(i, 'day');
        const data = date.format('D ddd');
        arrayDate.push(data);
    });
};

getfourDays();




const DateCard= () => {
  return (
    
    <div className={`flex justify-between items-center bg-$ py-4 gap-3  `}>
        {arrayDate && arrayDate.map((arrayDat,i) =>(
          <div key={arrayDat} className={`${i==0 ? "bg-purple-600 text-white":"bg-purple-300 text-black"} px-4 py-3 rounded-md  text-center q q q `}>
            <p className='text-xl '>{arrayDat}</p>
          </div>
        ))}
    </div>
  )
}

export default DateCard