import React, { FC } from 'react';
import { Box } from '../../styled/box/box';
import { Text } from '../../styled/text/text';
import { ITecnologia } from '../../interface/proyectos';
import { conocimientosDB } from '../../database/conocimientos';

interface Props {
  title: ITecnologia;
  technologies: ITecnologia[];
}

export const Tecnologia: FC<Props> = ({ title, technologies }) => {
  return (
    <Box
      background={
        technologies.some((c) => c === title)
          ? conocimientosDB.filter((c) => c.title === title)[0].color
          : '#000'
      }
      padding='5px 10px'
      radius='15px'
      width='fit-content'
    >
      <Text color='#fff' center size={12}>
        {title}
      </Text>
    </Box>
  );
};
