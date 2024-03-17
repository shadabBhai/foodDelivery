import React from "react";
import { GIT_API, GIT_IMAGE_URL, GIT_URL } from "../utils/constants";

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
    const data = await fetch(GIT_URL);
    const jsonData = await data?.json();
    // console.log(jsonData);
    this.setState({
      userInfo: jsonData,
    });
  }
  render() {
    // console.log("child-render");
    const { name, location, login } = this?.state?.userInfo;

    return (
      <div className="bg-green-100 text-center my-5   flex  justify-center">
        <div>
          <img src={GIT_IMAGE_URL} alt="" className="w-36 rounded-full" />
        </div>
        <div className="m-5">
          <h1 className="font-bold text-lg">Developer Information </h1>
          <h2>{name}</h2>
          <h3>Location : {location}</h3>
          <h3>Contact : @{login}</h3>
        </div>
      </div>
    );
  }
}
export default UserClass;
