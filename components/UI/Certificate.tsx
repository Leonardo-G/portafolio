import React, { Dispatch, FC } from 'react';

import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ImageContainer } from '../ImageContainer';
import { ICertificate } from '../../interface/certificate';

import { Box, Flex } from '../../styled/box/box';
import { Position } from '../../styled/position/position';
import { Text, TextLink } from '../../styled/text/text';
import { IconSize } from '../../styled/icon/icon';

interface Props {
  certificate: ICertificate;
  numberCertificate: number;
  setNumberCertificate: Dispatch<React.SetStateAction<number>>;
}

export const Certificate: FC<Props> = ({
  certificate: {
    id,
    certificate,
    education,
    linkCertificate,
    imgCertificate,
    knowledge,
    technologies,
    type,
    year,
  },
  numberCertificate,
  setNumberCertificate,
}) => {
  return (
    <>
      <Box ovHidden transition>
        <Box
          padding='20px'
          borderY='2px solid #000'
          borderTopNone
          className='relative'
          zIndex='2'
          background='#fff'
        >
          <Position bottom='0' left='0' width='100%'>
            <Box width='100%' height='2px' background='#000'></Box>
          </Position>
          <Flex colCenter>
            <Text
              weight={700}
              size={25}
              sizeXL={18}
              sizeXM={14}
              className='f-2'
            >
              {certificate}
            </Text>
            <Text className='f-auto' dNone>
              {education}
            </Text>
            <TextLink
              size={14}
              href={linkCertificate}
              target='_blank'
              rel='nooponer noreferrer'
              className='f-auto'
              dNoneXM
            >
              {type}
            </TextLink>
            <Text size={18} sizeXL={14} weight={600} className='f-auto'>
              {year}
            </Text>
            <Box>
              <IconSize size={60} sizeXL={30}>
                <FontAwesomeIcon
                  icon={faAdd}
                  onClick={() =>
                    setNumberCertificate(
                      numberCertificate === 0
                        ? id
                        : numberCertificate !== id
                          ? id
                          : 0,
                    )
                  }
                  style={{
                    cursor: 'pointer',
                    transform:
                      numberCertificate === id ? 'rotate(45deg)' : 'rotate(0)',
                    transition: '.5s all ease',
                  }}
                />
              </IconSize>
            </Box>
          </Flex>
        </Box>
        <Box
          background='yellow'
          padding={numberCertificate === id ? '50px' : '0px 50px'}
          borderY='2px solid #000'
          transition
          height={numberCertificate === id ? '500px' : '0px'}
          overflowY
        >
          <Flex columnGap={40} columnXS>
            <Box className='f-auto'>
              <Text paddingBt>Lo que se aprendió</Text>
              <ul>
                {knowledge.map((k, idx) => (
                  <li key={idx}>
                    <Text>{k}</Text>
                  </li>
                ))}
              </ul>
            </Box>
            <Box className='f-auto'>
              <Box padding='20px 0'>
                <ImageContainer height={200} src={imgCertificate} />
              </Box>
              <Text paddingBt>Tecnologías vista:</Text>
              <Text weight={600}>
                {technologies.map((t, idx) =>
                  technologies.length - 1 === idx ? `${t}` : `${t}, `,
                )}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
