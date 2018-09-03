import React from "react";
import axios from "axios";
import { Button, Form, Icon, Transition } from 'semantic-ui-react'

import Result from '../components/Result/Result'
import Loader from '../components/Loader/Loader'

import './domain.styl'

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

      })
  }

  render() {
    const { domain, result, isLoading } = this.state
    console.log(result)
    return (
      <div className="home">
        <div className="home-title">
          <h2>Whois Whois Net</h2>
        </div>
        <div className="home-slogan">
          <h1>Search and get your domain name</h1>
        </div>
        <div className="form">
          <div className="form-container">
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Find a domain name</label>
                <input type="text" name="domain" value={this.state.value} onChange={this.handleChange} placeholder="e.g. : yourdomain.com" />
              </Form.Field>
              <Button color='green' icon labelPosition='left' type="submit" value="Submit"><Icon name='search' />Check Domain Availability</Button>
            </Form>
          </div>
        </div>
        {result !== undefined && <Transition animation='fade' duration={1500}><Result domain={domain} searchResult={result} /></Transition>}
      </div>
    )
  }
}