export const PostCard = ({ title, body, user }) => {
  return (
    <div className='posts_container'>
      <h1>{title}</h1>
      <hr className='line' />
      <br />
      <p className='body_post'>{body}</p>
      <br />
      <p className='user_post'>{user}</p>
    </div>
  );
};
