import React, { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components';

const ImageStyle = styled.div`
    position: relative;
    height: ${ ({ height }: { height?: number; radius?: string }) => height ? `${height}px` : "100%" };
    width: 100%;
    overflow: hidden;
    ${ ({ radius }) => radius && `border-radius: ${ radius }` };
`

interface Props {
    src: string;
    height?: number;
    cover?: boolean;
    radius?: string;
}

export const ImageContainer: FC<Props> = ({ src, height, cover, radius }) => {
    return (
        <ImageStyle
            height={ height }
            className='relative'
            radius={ radius }
        >
            <Image 
                src={ src }
                fill
                alt="Imagen completada"
                style={{
                    objectFit: cover ? "cover" : "contain"
                }}
            />
        </ImageStyle>
    )
}
