import React from 'react';

const post = {
  id: 1,
  description: 'Exploring',
  likes: 7,
  author: null,
  published_at: '2021-08-01T17:07:30.749Z',
  created_at: '2021-08-01T17:07:27.832Z',
  updated_at: '2021-08-01T17:07:30.785Z',
  image: {
    id: 1,
    name: 'avatarM.jpg',
    alternativeText: '',
    caption: '',
    width: 488,
    height: 478,
    formats: {
      thumbnail: {
        name: 'thumbnail_avatarM.jpg',
        hash: 'thumbnail_avatar_M_ad1e39ed5e',
        ext: '.jpg',
        mime: 'image/jpeg',
        width: 159,
        height: 156,
        size: 6.95,
        path: null,
        url: '/uploads/thumbnail_avatar_M_ad1e39ed5e.jpg',
      },
    },
    hash: 'avatar_M_ad1e39ed5e',
    ext: '.jpg',
    mime: 'image/jpeg',
    size: 26.16,
    url: '/uploads/avatar_M_ad1e39ed5e.jpg',
    previewUrl: null,
    provider: 'local',
    provider_metadata: null,
    created_at: '2021-08-01T17:06:41.199Z',
    updated_at: '2021-08-01T17:06:41.319Z',
  },
};

const API_URL = 'http://localhost:1337';

const formatImageUrl = (url) => `${API_URL}${url}`;

function Post({ likes, description, url }) {
  return (
    <div className="post">
      <img className="post-image" src={formatImageUrl(url)} alt="me" />
      <h4>{description}</h4>
      <div>
        <span>Likes: {likes}</span>
      </div>
    </div>
  );
}

export default Post;
