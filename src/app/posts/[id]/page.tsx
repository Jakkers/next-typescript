export default function PostIdPage({
  params,
}: {
  params: { id: string | number };
}) {
  //   type paramsType = {
  //     id: number
  //   };

  //   type propsType = {
  //     props: {
  //         title: string;
  //         src: string;
  //     }

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>{params.id}</p>
    </div>
  );
}
