import React from 'react';
import { useFetch } from '../../hooks/useFetch';

export const PostList = ({ data }) => {
  const { data } = useFetch('https://waco-api.herokuapp.com/api/posts');
  const post = { ...data };
  return (
    <ul>
      <li></li>
    </ul>
  );
};
