import React from "react";
import axios from "axios";
import Server from "./../utils/server";
export default class Domain extends React.Component {
  componentDidMount() {
    // this.server = new Server();

    // axios
    //   .get(
    //     "https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_mo13cGUHjwAhZpNllGU2UHcoXrXVW&domainName=google.com"
    //   ) // GET
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    axios
      .get("https://api.godaddy.com/v1/domains/available?domain=lanteri.eu", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization":
            "sso-key 9jZHAedVW1e_LCy7WtfamsGYsLpPPtP96Y:LCy9HLispHzCf9Wgu9U3uz",
          "Access-Control-Allow-Origin": "*",
          "x-debug": "true"
          // "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS"
        },
        mode: "no-cors",
        // crossOrigin: true,
        async: true,
        crossDomain: true,
        withCredentials: true
        // credentials: "same-origin"
      }) // GET
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  } //didmount

  render() {
    return "hello";
  }
}
