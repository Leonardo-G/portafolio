'use client';

import React, { useContext, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { UIContext } from '../../context/UI/UIContext';

import { LineHead } from '../../styled/ui';
import { Title } from '../../styled/text/text';
import { Box, Flex } from '../../styled/box/box';
import { Section } from '../../styled/globals';
import { RowFlex } from '../sobremi/RowFlex/RowFlex';
import { RowFlexReverse } from '../sobremi/RowFlexReverse/RowFlexReverse';
import { KnowledgeColumn } from '../sobremi/KnowledgeColumn/KnowledgeColumn';
import { TextHeading } from '../text/TextHeading';

export const Nosotros = () => {
  const { changeCampoNav } = useContext(UIContext);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      changeCampoNav('nosotros');
    }

    //eslint-disable-next-line
  }, [inView]);

  return (
    <>
      <LineHead background='#000'>
        <Flex center columnGap={40}>
          <Title sizeXL={35} className='f-auto' size={55}>
            SOBRE MI
          </Title>
          <Title sizeXL={35} className='f-auto' size={55}>
            SOBRE MI
          </Title>
          <Title sizeXL={35} className='f-auto' size={55}>
            SOBRE MI
          </Title>
          <Title sizeXL={35} className='f-auto' size={55}>
            SOBRE MI
          </Title>
        </Flex>
      </LineHead>
      <Section background='#ff16b9ed' ref={ref} id='sobremi'>
        <Box className='container'>
          <RowFlex />
        </Box>
        <Box className='mt-full mt-full-xl container'>
          <RowFlexReverse />
        </Box>
        <Box className='mt-full mt-full-xl container'>
          <div className='d-flex f-col-xl'>
            <KnowledgeColumn stack='basic'>
              <TextHeading
                title='Conocimientos básicos'
                text='Herramientas con manejo básico'
              />
            </KnowledgeColumn>
            <KnowledgeColumn stack='other'>
              <TextHeading
                title='Otros'
                text='Otras herramientas como el control de versiones'
              />
            </KnowledgeColumn>
          </div>
        </Box>
      </Section>
    </>
  );
};
