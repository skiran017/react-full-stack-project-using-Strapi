import './App.css';
import Post from './components/Post';

const posts = [
  {
    likes: 7,
    description: 'Exploring',
    image: {
      url: '/uploads/avatar_M_ad1e39ed5e.jpg',
    },
  },
  {
    likes: 17,
    description: 'The second post',
    image: {
      url: '/uploads/avatar_M_ad1e39ed5e.jpg',
    },
  },
  {
    likes: 20,
    description: 'The third post',
    image: {
      url: '/uploads/avatar_M_ad1e39ed5e.jpg',
    },
  },
];

function App() {
  return posts.map((post) => {
    return (
      <div className="App">
        <Post
          likes={post.likes}
          description={post.description}
          url={post.image && post.image.url}
        />
      </div>
    );
  });
}

export default App;
