import React, { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components';

const ImageStyle = styled.div`
    position: relative;
    height: ${ ({ height }: { height: number }) => height && `${height}px` };
    width: 100%;
`

interface Props {
    src: string;
    height: number;
}

export const ImageContainer: FC<Props> = ({ src, height }) => {
    return (
        <ImageStyle
            height={ height }
            className='relative'
        >
            <Image 
                src={ src }
                fill
                alt="Imagen completada"
                style={{
                    objectFit: "contain"
                }}
            />
        </ImageStyle>
    )
}
