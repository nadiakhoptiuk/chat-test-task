import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filter/filterActions';
import { useGetContactsQuery } from 'redux/contacts';
import { filterSelector } from 'redux/filter/filterSelector';
import s from './FilterInput.module.css';

export default function FilterInput() {
  const { data } = useGetContactsQuery('', {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const onInputFind = evt => {
    const stringForFilter = evt.target.value;
    dispatch(updateFilter(stringForFilter));
  };

  return (
    <>
      {data?.length > 0 ? (
        <label className={s.inputLabel}>
          <input
            className={s.filterInput}
            type="text"
            name="filter"
            value={filter}
            onChange={onInputFind}
            placeholder="Search or start new chat"
          />
        </label>
      ) : null}
    </>
  );
}
