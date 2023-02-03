import { memo } from "react";
export const Small = memo (({ value }) => {

  console.log("me volvi a cargar");
  
  return <small>{value}</small>;
})
