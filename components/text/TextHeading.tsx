import React, { FC } from 'react'

interface Props {
    text: string;
    title: string;
}

export const TextHeading: FC<Props> = ({ text, title }) => {
  return (
    <>
        <h3 className='color-w text-center'>{ title }</h3>
        <p className='color-w text-center'>{ text }</p>
    </>
  )
}
