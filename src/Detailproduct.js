import React, { Component } from "react";
import { getAllProductdetail } from "./api/product";

class Detailproduct extends Component {
  constructor(props) {
    super(props);
    console.log(`props`, props);
    console.log(`id`, props.match.params.id);

    if (props && props.match && props.match.params && props.match.params.id) {
      getAllProductdetail(props.match.params.id).then((res) => {
        console.log(`res`, res.data);
      });
    }
  }

  render() {
    return <div></div>;
  }
}
export default Detailproduct;
