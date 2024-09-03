import React from "react";

export default class Numbers extends React.Component {
  toSetExpA(e) {
    if (this.props.expA !== "0") {
      this.props.setExpA(this.props.expA + e.target.innerHTML);
    } else {
      this.props.setExpA(e.target.innerHTML);
    }
  }
  toSetExpB(e) {
    this.props.setExpB(this.props.expB + e.target.innerHTML);
  }
  clickSetExp(e) {
    this.props.nextExp ? this.toSetExpA(e) : this.toSetExpB(e);
  }
  render() {
    const numbers = Array.from(
      Array(10)
        .keys()
        .map((number) => (
          <button
            onClick={(e) => this.clickSetExp(e)}
            className={this.props.btnClasses}
            key={number}
          >
            {number}
          </button>
        ))
    );
    return <div className="flex gap-3">{numbers}</div>;
  }
}
