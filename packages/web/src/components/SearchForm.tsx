import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import styled from 'styled-components';

import IconSearch from './Icon/IconSearch';
import SearchInput from './SearchInput';

const Form = styled.form``;

const Input = styled(SearchInput)`
  font-size: monospace;
`;

/**
 * Props of `SearchForm` component.
 */
type Props = {
  onSearch?: (term: string) => void;
  className?: string;
  initialValue?: string;
};

/**
 * Component that renders a form for searching heros.
 * @param props - Component's props.
 */
export default function SearchForm({
  onSearch,
  className,
  initialValue = '',
}: Props) {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      event.stopPropagation();

      onSearch?.(value);
    },
    [value, onSearch],
  );

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Input value={value} onChange={handleChange} />
      <button type="submit">
        <IconSearch size="1em" color="currentColor" />
        <span>Search</span>
      </button>
    </Form>
  );
}
