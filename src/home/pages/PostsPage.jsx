import { useFetch } from '../../hooks/useFetch';
import { PostCard } from '../components/PostCard';

export const PostsPage = () => {
  const { data, isLoading } = useFetch(
    'https://waco-api.herokuapp.com/api/posts/all',
  );

  const post = data?.data.map((value) => (
    <li key={value.id}>
      <PostCard title={value.title} body={value.body} user={value.user} />
    </li>
  ));

  return (
    <div className='posts_container'>
      <h1>Posts List</h1>
      {isLoading ? (
        <div className='container'>
          <h1> Loading... </h1>
        </div>
      ) : (
        <ul className='post_list'>{post}</ul>
      )}
    </div>
  );
};
