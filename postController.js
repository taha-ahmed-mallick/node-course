const posts = [
	{ id: 1, post: "POST 1" },
	{ id: 2, post: "POST 2" },
];

const getPosts = () => posts;

const getPostsLength = () => posts.length;
// export const getPosts = () => posts;

// another way

export default getPosts;

export { getPostsLength };
