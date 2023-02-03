import { useLayoutEffect, useState } from "react";
import { useRef } from "react";

export const Quote = ({ name, species, image }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width})
  }, [name, species]);


  return (
    <blockquote style={{ display: "flex" }}>
      <h1 ref={pRef}>
        {name} - {species}
      </h1>
      <img src={image} alt="img" />
      <code>{JSON.stringify(boxSize)}</code>
      <footer>Roger Jiménez</footer>
    </blockquote>
  );
};
