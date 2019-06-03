import React from 'react';

class Homepage extends React.Component {
  state = {
    visible: false,
  }

  toggle = (e) => {
    e.preventDefault();
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
            <div className="wrapper">
                <h1>Welcome, this is the About Us page</h1>
                {this.state.visible ? 'HERE' : null}
                <button onClick={this.toggle} >
                    Click me!
                </button>
            </div>
    );
  }
}

export default Homepage;
