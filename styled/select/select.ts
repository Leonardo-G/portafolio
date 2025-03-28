import styled from 'styled-components';

export const Select = styled.div`
  position: relative;
  padding: 10px;
  width: 200px;
  background: #fff;
`;

export const OptionStyle = styled.div`
    background ${({ backgroundSelect, background }: { background?: string; backgroundSelect: boolean }) => (backgroundSelect ? background : '#fff')};
    padding: 5px 10px;
    &:hover {
        background: ${({ background }) => (background ? background : '#fff')};
    }

    &:hover p{
        color: #fff;
    }
`;
