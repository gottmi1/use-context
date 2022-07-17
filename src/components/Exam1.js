import React from "react";
import Context from "../contexts/Context";

export default function Exam1() {
  return (
    <Context.Consumer>
      {(persons) => (
        <ul>
          {persons.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>
      )}
    </Context.Consumer>
  );
}

// Consumer를 사용. 펑셔널 클래스 둘 다 가능하기 때문에 범용적으로 사용됨
