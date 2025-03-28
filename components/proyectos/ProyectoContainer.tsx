import React, { FC } from 'react';
import { Box } from '../../styled/box/box';
import { Title } from '../../styled/text/text';
import { Grid } from '../../styled/grid/grid';
import { proyectosDB } from '../../database/proyectos';
import { Proyecto } from './Proyecto';
import { ITecnologia } from '../../interface/proyectos';

interface Props {
  technologies: ITecnologia[];
}

export const ProyectoContainer: FC<Props> = ({ technologies }) => {
  return (
    <>
      <Box padding='20px 0'>
        <Title className='container' size={40}>
          Front End
        </Title>
      </Box>
      <Grid
        className='container'
        rows='600px 300px 500px 400px'
        rowsXM='350px 250px 350px 250px'
        gap={50}
        gapXM={10}
      >
        {proyectosDB
          .filter((p) => p.structure === 'front')
          .map((p) => (
            <Proyecto key={p.id} proyecto={p} technologies={technologies} />
          ))}
      </Grid>
      <Box padding='20px 0'>
        <Title className='container' size={40}>
          Back End
        </Title>
      </Box>
      <Grid
        className='container'
        rows='300px 300px'
        rowsXM='300px 300px'
        gap={50}
        gapXM={10}
      >
        {proyectosDB
          .filter((p) => p.structure === 'back')
          .map((p) => (
            <Proyecto
              key={p.id}
              proyecto={p}
              title
              technologies={technologies}
            />
          ))}
      </Grid>
    </>
  );
};
