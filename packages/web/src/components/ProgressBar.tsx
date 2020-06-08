import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import useAnimationFrame from '../hooks/useAnimationFrame';
import usePortalContainer from '../hooks/usePortalContainer';

const COLOR = '#333333';

const Progress = styled.progress`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 0.625em;
  z-index: 999999;
  appearance: none;
  transition: width 0.1s, opacity 0.4s;
  color: ${COLOR};
  background-color: transparent;

  &::-webkit-progress-bar {
    background-color: transparent;
  }

  &::-webkit-progress-value {
    background-color: ${COLOR};
  }

  &::-moz-progress-bar {
    background-color: ${COLOR};
  }
`;

/**
 * Component that renders a progress bar using semantic HTML.
 */
export default function ProgressBar() {
  const container = usePortalContainer('progress-bar');
  const [percent, setPercent] = useState<number>(75);

  useAnimationFrame(() =>
    setPercent((percent) => {
      if (percent >= 100) return 0;
      return percent + 0.6;
    }),
  );

  return createPortal(
    <Progress max="100" value={percent.toFixed(3)} />,
    container,
  );
}
