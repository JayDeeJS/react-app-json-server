import { $api } from "requester";

export const loginFetch = async (params) => {
    try {
        const data = await $api.post('login', params)
        return data
    } catch (error) {
        console.error(error);
    }
}

export const refreshFetch = async (token) => {
    try {
        const data = await $api.post('refresh', token)
        return data
    } catch (error) {
        console.error(error);
    }
}

export const postsFetch = async () => {
    try {
      const response = await $api.get('/posts');
      return response.data;
    } catch (error) {
      console.error(error);
    }
};

export const postsDelete = async (id) => {
    try {
      const response = await $api.delete(`/posts/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
};

export const postsAdd = async (newTitle, newAuthor) => {
  try {
    const response = await $api.post('/posts', { title: newTitle, author: newAuthor });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postsEdit = async (postId, newTitle, newAuthor) => {
  try {
    const response = await $api.patch(`/posts`, { title: newTitle, author: newAuthor });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};