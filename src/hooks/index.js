import { useSelector } from 'react-redux';

function useResults() {
  return useSelector((state) => state.results);
}

function useSearchTerm() {
  return useSelector((state) => state.searchTerm);
}

export { useResults, useSearchTerm };
