import { useSelector } from 'react-redux';

function useResults() {
  return useSelector((state) => state.results);
}

export { useResults };
