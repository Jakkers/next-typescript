type HelloProps = {
  name: string;
  age: number;
};

// export function Hello(props: HelloProps) {
//   return (
//     <div>
//       Hello {props.name} who is {props.age}
//     </div>
//   );
// }

// export function Hello(props: { name: string; age: number }) {
//     return (
//       <div>
//         Hello {props.name} who is {props.age}
//       </div>
//     );
//   }

export function Hello({ name, age }: HelloProps) {
  return (
    <div>
      Hello: {name} who is {age}
    </div>
  );
}
