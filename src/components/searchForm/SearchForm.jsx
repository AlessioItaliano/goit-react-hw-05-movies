import { useState } from 'react';
import Notiflix from 'notiflix';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      Notiflix.Notify.failure('Введіть фільм від якого неможливо відірватись!');
    }

    onSubmit(query);
    setQuery('');
  };

  const onChangeInput = e => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="query"
        value={query || ''}
        onChange={onChangeInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
