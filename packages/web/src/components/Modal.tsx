import React, { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import usePortalContainer from '../hooks/usePortalContainer';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.25);
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 50em;
  min-width: 90vw;
  max-height: 100%;
  background-color: #ffffff;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
`;

const Wrapper = styled.div``;

/**
 * Props of `Modal` component.
 */
type Props = {
  open?: boolean;
  children?: ReactNode;
};

/**
 * Component that renders a modal component using latest browser API.
 * @param props - Component's props.
 */
export default function Modal({ open, children }: Props) {
  const container = usePortalContainer('modal');
  return createPortal(
    <Wrapper>
      <Backdrop />
      <Container>{children}</Container>
    </Wrapper>,
    container,
  );
}
