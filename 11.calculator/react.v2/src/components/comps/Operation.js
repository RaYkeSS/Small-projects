import React from "react";

export default class Operation extends React.Component {
  clickSetOperator(operator) {
    this.props.setOperator(operator);
    this.props.setNextExp(!this.props.nextExp);
  }
  render() {
    const renderedOperators = this.props.operators.map((operator, key) => (
      <button
        onClick={() => this.clickSetOperator(operator)}
        key={key}
        className={this.props.btnClasses}
      >
        {operator}
      </button>
    ));
    return (
      <div className="flex gap-3">
        {renderedOperators}
        <button onClick={this.props.clearAll} className={this.props.btnClasses}>
          AC
        </button>
        <button
          onClick={this.props.calculate}
          className={this.props.btnClasses}
        >
          =
        </button>
      </div>
    );
  }
}
