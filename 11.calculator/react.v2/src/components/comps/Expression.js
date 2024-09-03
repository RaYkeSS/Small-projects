import React from "react";

export default class Expression extends React.Component {
  render() {
    const inputClass =
      "text-3xl p-5 bg-transparent rounded-lg border-2 border-gray-400 outline-0 w-fit min-w-96 justify-end flex";
    return (
      <div className={inputClass}>
        {this.props.expA + " " + this.props.operator + " " + this.props.expB}
      </div>
    );
  }
}
