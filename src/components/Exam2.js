import React, { Component } from "react";
import Context from "../contexts/Context";

export default class Exam2 extends Component {
  static contextType = Context;
  // 큰 단점. static contextType은 여러개를 못 가져오고 하나만 정할 수 있다.
  render() {
    const persons = this.context;
    return (
      <ul>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}

// 거의 안 씀

// Exam2.contextType = Context; 5번줄 없이 이렇게해도 됨
