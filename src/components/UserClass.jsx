import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "SK",
        location: "UP",
        login: "@",
      },
    };
  }
  async componentDidMount() {
    // console.log("child Mount");
    const data = await fetch("https://api.github.com/users/shadabBhai");
    const jsonData = await data?.json();
    console.log(jsonData);
    this.setState({
      userInfo: jsonData,
    });
  }
  render() {
    // console.log("child-render");
    const { name, location, login } = this?.state?.userInfo;

    return (
      <div className="user-card">
        <h1>Here we used Class based Components</h1>
        <h2>{name}</h2>
        <h3>Location : {location}</h3>
        <h3>Contact : {login}</h3>
      </div>
    );
  }
}
export default UserClass;
