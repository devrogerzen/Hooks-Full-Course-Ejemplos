import { useFetch, useCounter } from "../hooks";
import { LoadingQuote } from "../03-Examples/LoadingQuote";
import { Quote } from "../03-Examples/Quote";

export const Layout = (url) => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  const { name, species, image } = !!data && data;

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <br />
      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote name={name} species={species} image={image} />
      )}

      <button disabled={isLoading} onClick={() => decrement()}>
        Preview
      </button>
      <button disabled={isLoading} onClick={() => increment()}>
        Next
      </button>
      <br />
      <button disabled={isLoading} onClick={() => reset()}>
        Reset
      </button>
    </>
  );
};
