import React from "react";
import { Button } from "@chakra-ui/react";

export default class CountButton extends React.Component {
  countClick() {
    this.props.onClick(this.props.data + this.props.expression);
  }

  render() {
    return <Button onClick={this.countClick}>{this.props.expression}</Button>;
  }
}
