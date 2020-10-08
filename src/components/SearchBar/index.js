import React, { useState, useContext } from 'react';
import Input from './../Input';
import { AppContext } from '../../state/AppContext';
import { AlertContext } from '../../state/AlertContext';

const SearchBar = () => {
  // Get data from global app state
  const {
    fetchBooks,
    startIndex,
    searchParams,
    maxResults,
    serSearchParams,
    clearState,
  } = useContext(AppContext);
  const { showAlert } = useContext(AlertContext);

  // Use local state for form handling
  const [values, setValues] = useState(searchParams);

  // Handle onSubmit event
  const handlerOnSubmit = (e) => {
    e.preventDefault();
    clearState();

    // Validation based on non empty fields
    if (!(Object.values(values).filter((v) => v !== '').length > 0))
      return showAlert('Please add at least one search parameter!', 'warning');

    fetchBooks(values, startIndex, maxResults);
    serSearchParams(values);

    //  Clear inputs
    //  setValues({
    //  query: '',
    //  inauthor: '',
    //  inpublisher: '',
    //  isbn: '',
    //  });
  };

  return (
    <div>
      <form className='c-search-form' onSubmit={handlerOnSubmit}>
        <Input
          className='c-search-form__input'
          name='query'
          value={values.query}
          placeholder='Query'
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
        <Input
          className='c-search-form__input'
          name='inauthor'
          value={values.inauthor}
          placeholder='Author'
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
        <Input
          className='c-search-form__input'
          name='inpublisher'
          value={values.inpublisher}
          placeholder='Publisher'
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
        <Input
          className='c-search-form__input'
          name='isbn'
          type='number'
          value={values.isbn}
          placeholder='ISBN'
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />

        <button className='c-btn c-search-form__btn'>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
