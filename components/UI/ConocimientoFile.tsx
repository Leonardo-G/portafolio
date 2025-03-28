import React, { FC } from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

import { IConocimientos } from '../../interface/conocimientos';

import { IconImage, IconSize } from '../../styled/icon/icon';
import { Flex } from '../../styled/box/box';
import styles from '../../styles/UI/ConocimientoFile.module.css';

interface Props {
  conocimiento: IConocimientos;
  number: number;
  isHover: boolean;
}

export const ConocimientoFile: FC<Props> = ({
  conocimiento: { file, title, type },
  number,
}) => {
  if (type === 'icon') {
    return (
      <Flex colCenter columnGap={10}>
        <IconSize size={100} sizeXL={60} sizeXM={40}>
          <FontAwesomeIcon
            icon={file as IconDefinition}
            style={{
              transitionDelay: `${number / 3 + 's'}`,
            }}
            title={title}
          />
        </IconSize>
      </Flex>
    );
  }

  return (
    <div className={styles.file}>
      <IconImage
        size={100}
        sizeXL={60}
        sizeXM={40}
        style={{
          transitionDelay: `${number / 3 + 's'}`,
        }}
      >
        <Image src={file as string} alt={title} title={title} fill />
      </IconImage>
    </div>
  );
};
