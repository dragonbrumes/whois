import React from "react";
import axios from "axios";
import Server from "./../utils/server";
import unirest from "unirest";


export default class Domain extends React.Component {
  componentDidMount() {
    // this.server = new Server();

    axios.get("https://jsonwhois.com/api/v1/whois", {
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        'Authorization': 'Token token=14c6d29d0dd495e4f10d6e9051850f63',
      },
      params: {
        "domain": "google.com"
      },
      mode: "no-cors",
      crossDomain: true,
    }).then(res => {
      console.log(res.data);
    })

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

    // axios
    //   .get("https://api.godaddy.com/v1/domains/available?domain=lanteri.eu", {
    //     headers: {
    //       // "Accept": "application/json",
    //       // "Content-Type": "application/json",
    //       "Authorization":
    //         "sso-key 9jZHAedVW1e_LCy7WtfamsGYsLpPPtP96Y:LCy9HLispHzCf9Wgu9U3uz",
    //       // "Access-Control-Allow-Origin": "*",
    //       // "x-debug": "true"
    //       // "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS"
    //     },
    //     mode: "no-cors",
    //     // crossOrigin: true,
    //     // async: true,
    //     crossDomain: true,
    //     // withCredentials: true
    //     credentials: "include"
    //   }) // GET
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  } //didmount

  render() {
    return "hello";
  }
}
