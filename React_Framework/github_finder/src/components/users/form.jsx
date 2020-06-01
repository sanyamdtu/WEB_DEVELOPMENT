import React, { Component } from "react";

export class form extends Component {
  state = {
    text: "",
  };
  onChange = (e) => {
    this.setState({ text: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      this.props.alert("please enter something");
    } else {
      this.props.search(this.state.text);
      console.log(e);
      this.setState({ text: "" });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="d-inline">
          <input
            className="form-control"
            type="text"
            value={this.state.text}
            placeholder="search term"
            onChange={this.onChange}
          ></input>
          <button type="submit" className="btn btn-primary mx-auto">
            Submit
          </button>
        </form>
        {this.props.show_clear && (
          <input
            type="button"
            value="clear"
            className="btn btn-group-lg btn-danger mx-auto"
            onClick={this.props.clear}
          ></input>
        )}
      </div>
    );
  }
}

export default form;
