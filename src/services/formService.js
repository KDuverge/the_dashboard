export const setFormData = (payload, tags) => {
  const data = new FormData(payload);

  data.set('title', data.get('title'));
  data.set('image_url', data.get('image_url'));
  data.set('description', data.get('description'));
  data.set('github_link', data.get('github_link'));
  data.set('website_link', data.get('website_link'));
  data.set('tags', tags);

  return data;
};
