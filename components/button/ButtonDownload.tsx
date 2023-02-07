import Link from 'next/link'
import React, { FC } from 'react'

import { Button } from '../../styled/ui'

interface Props {
    text: string;
}

export const ButtonDownload: FC<Props> = ({ text }) => {
    return (
        <Button>
            <Link
                href="/file/Guanuco-Leonardo-cv-js.pdf" 
                download="leonardo-guanuco-cv"
                target="_blank"
                rel='noopener noreferrer'
            >
                { text }
            </Link>
        </Button>
    )
}
