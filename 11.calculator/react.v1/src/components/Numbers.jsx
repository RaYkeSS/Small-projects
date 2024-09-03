import React from "react";

import { Button, Box } from "@chakra-ui/react";

export default class Numbers extends React.Component {
  numClick(e) {
    if (this.props.data !== "0") {
      this.props.onClick(this.props.data + e.target.innerHTML);
    } else {
      this.props.onClick(e.target.innerHTML);
    }
  }

  render() {
    // const myClick = (e) => {
    //     if(this.props.data !== '0') {
    //         this.props.onClick(this.props.data + e.target.innerHTML);
    //     } else {
    //         this.props.onClick(e.target.innerHTML)
    //     }
    // }
    const nums = Array.from(Array(10).keys()).map((number) => (
      <Button onClick={(e) => this.numClick(e)} w="40px" h="40px" margin="4px">
        {number}
      </Button>
    ));
    return (
      <Box display="flex" flexWrap="wrap">
        {nums}
      </Box>
    );
  }
}
