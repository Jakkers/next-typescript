export default async function PostsPage() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();
  //I need to specify the type of post

  type postType = {
    id: number;
    title: string;
    body: string;
  };
  return (
    <div>
      <h1>Posts</h1>
      {data.map((post: postType) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
