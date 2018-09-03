import React from "react";
import axios from "axios";
import Server from "./../utils/server";
import unirest from "unirest";
// import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import Result from '../components/Result/Result'
import Loader from '../components/Loader/Loader'

export default class Domain extends React.Component {


  state = ({
    domain: "",
    result: undefined,
    isLoading: false,
  })


  componentDidMount() {
    // this.server = new Server();

    /*****************/
    /* jsonwhois.com */
    /*****************/

    // axios.get("https://jsonwhois.com/api/v1/whois", {
    //   headers: {
    //     'Accept': 'application/json',
    //     // "Content-Type": "application/json",
    //     'Authorization': 'Token token=14c6d29d0dd495e4f10d6e9051850f63',
    //   },
    //   params: {
    //     "domain": "google.com"
    //   },
    //   // mode: "no-cors",
    //   crossDomain: true,
    //   // credentials: "include"
    // }).then(res => {
    //   console.log(res.data);
    // })

    /*****************/
    /* jsonwhois.io */
    /*****************/

    // axios.get("https://api.jsonwhois.io/availability?key=oBLWSTUX5rRKdkspDaIynbCjoTYU0AjQ&domain=emailrecon.com")
    //   .then(res => {
    //     console.log(res.data);
    //   })

    /*****************/
    /* whoisxmlapi.com */
    /*****************/

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

    /*****************/
    /* godaddy.com */
    /*****************/

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

  handleChange = (event) => {
    this.setState({ domain: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const URL = "https://api.jsonwhois.io/availability?key=oBLWSTUX5rRKdkspDaIynbCjoTYU0AjQ&domain="
    axios.get(`${URL}${this.state.domain}`)
      .then(res => {
        this.setState({ result: res.data.is_available })
        // const { is_available } = res.data

      })
  }

  render() {
    const { domain, result, isLoading } = this.state
    console.log(result)
    return (
      <div className="container">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter your domain name:
          <input type="text" name="domain" value={this.state.value} onChange={this.handleChange} placeholder="yourdomain.com" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        {result !== undefined && <Result domain={domain} searchResult={result} />}
        {/* {result === false ? <div>Indisponible</div> : <div>Disponible</div>}
        {result === true || false ? result : domain}
        {result === false && "`<div>${result}</div>`"}
        {result} */}
      </div>
    )
  }
}
