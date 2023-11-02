import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import List from './components/List';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton';
import { TState } from './utils/types';

function App() {
  const [state, setState] = useState<TState>({
    data: null,
    value: '',
    isError: false,
    isLoading: false,
  });

  function getData(value: string): void {
    setState((prev) => {
      return {
        ...prev,
        isLoading: true,
      };
    });
    const url: string =
      value === ''
        ? 'https://swapi.dev/api/people/'
        : `https://swapi.dev/api/people/?search=${value}`;
    fetch(url)
      .then((res) => {
        if (res.status === 404)
          setState((prev) => {
            return {
              ...prev,
              isError: true,
            };
          });
        return res.json();
      })
      .then((data) => {
        setState((prev) => {
          return {
            ...prev,
            data: data.results,
            isLoading: false,
          };
        });
      });
  }

  useEffect((): void => {
    const lsValue: string | null = localStorage.getItem('searchItem');
    if (lsValue !== null) {
      setState((prev) => {
        return {
          ...prev,
          value: lsValue,
        };
      });

      getData(lsValue);
    } else {
      getData(state.value);
    }
  }, []);

  function changeState(newValue: string): void {
    setState((prev) => {
      return {
        ...prev,
        value: newValue,
      };
    });
  }

  function errorMaker(): void {
    try {
      throw new Error('oops');
    } catch (error) {
      setState((prev) => {
        return {
          ...prev,
          isError: true,
        };
      });
    }
  }

  return (
    <div className="container">
      <Search
        value={state.value}
        setState={(val) => changeState(val)}
        getData={() => getData(state.value)}
      />
      <ErrorBoundary>
        <ErrorButton onClick={errorMaker} />
        <List
          data={state.data}
          isError={state.isError}
          isLoading={state.isLoading}
        />
      </ErrorBoundary>
    </div>
  );
}

export default App;
