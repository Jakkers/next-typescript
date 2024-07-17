type CarsType = {
  name: string;
  car: string;
  workshop: [tool: string, area: string];
};

export default function Cars(props: CarsType) {
  return (
    <div>
      <h1>Car page</h1>
      <p>
        {props.name} drives a {props.car}
      </p>
      <p>
        The car broke so {props.name} used a {props.workshop[0]} in the{" "}
        {props.workshop[1]} to fix his {props.car}
      </p>
    </div>
  );
}
