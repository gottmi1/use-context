import React, { useContext } from "react";
import Context from "../contexts/Context";

export default function Exam3() {
  const persons = useContext(Context);
  return (
    <ul>
      {persons.map((person) => (
        <li>{person.name}</li>
      ))}
    </ul>
  );
}
