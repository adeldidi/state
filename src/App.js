import React, { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    person: {
      fullName: " Adel Ghanmi ",
      bio: "Engineer",
      imgSrc: "https://via.placeholder.com/150",
      profession: " Air traffic controller",
    },
    show: true,
    mountedTime: 0,
  };}

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        mountedTime: this.state.mountedTime + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showMe = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div>
        <button onClick={this.showMe}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>

        {show && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}

        <p>Component mounted {mountedTime} seconds ago.</p>
      </div>
    );
  }
}

export default App;


