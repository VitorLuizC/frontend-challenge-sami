import styled from 'styled-components';

declare module 'react' {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    enterKeyHint?: string;
  }
}

const SearchInput = styled.input.attrs({
  type: 'search',
  inputMode: 'search',
  enterKeyHint: 'search',
})``;

export default SearchInput;
