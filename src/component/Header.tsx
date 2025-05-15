import React from 'react'

interface Props {
    text:string
}
const Header:React.FC<Props> = ({text}) => {
  return (
    <h4 className='text-2xl font-semibold text-black'>{text}</h4>
  )
}

export default Header