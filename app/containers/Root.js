// @flow
import React, { Component } from "react";
// import Routes from "../routes";
import { BrowserRouter } from "react-router-dom";
import RequestPage from "./RequestPage";
import 'typeface-roboto';

export default class Root extends Component<Props> {
  render() {
    return <RequestPage />;
  }
}
