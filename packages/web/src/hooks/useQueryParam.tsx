import { useHistory } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react';

/**
 * Hook that provides a state and setState function. Its state is initialized
 * using URL's query param, and each time state is changed it updates URL's
 * query param to keep it synchronized.
 * @param name - Name of the URL's search param.
 * @param initialValue - Initial value to be used if URL's query param is empty.
 */
const useQueryParam = (name: string, initialValue: string = '') => {
  const history = useHistory();

  const params = useMemo(() => {
    return new URLSearchParams(history.location.search);
  }, [history]);

  const [value, setValue] = useState(() => {
    const value = params.get(name);
    return value?.trim() || initialValue;
  });

  useEffect(() => {
    if (value.trim()) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    history.push({
      key: history.location.key,
      hash: history.location.hash,
      state: history.location.state,
      pathname: history.location.pathname,
      search: params.toString(),
    });
  }, [value, history]);

  return [value, setValue] as const;
};

export default useQueryParam;
