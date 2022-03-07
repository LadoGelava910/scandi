import React, { Component } from "react";

export default class SizeButton extends Component {
  state = { active_btn: false };
  setActive = () => {
    this.setState({ active_btn: !this.state.active_btn });
  };
  render() {
    return (
      <>
        <button
          style={{
            background: this.state.active_btn && "#1D1F22",
            color: this.state.active_btn && "white",
          }}
          onClick={this.setActive}
        >
          {this.props.btn}
        </button>
      </>
    );
  }
}
