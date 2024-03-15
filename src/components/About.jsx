import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent- constructor");
  }

  render() {
    // console.log("parent-reander");
    return (
      <div className="user">
        <UserClass />
      </div>
    );
  }
}

export default About;
