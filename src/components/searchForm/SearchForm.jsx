import { useState } from 'react';
import Notiflix from 'notiflix';
import { Form, FormInput, FormBtn } from './SearchForm.styled';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      Notiflix.Notify.failure('Введіть фільм від якого неможливо відірватись!');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  const onChangeInput = e => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        name="query"
        value={query}
        onChange={onChangeInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <FormBtn type="submit">Search</FormBtn>
    </Form>
  );
};

SearchForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
