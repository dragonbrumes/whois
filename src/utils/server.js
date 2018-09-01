import axios from "axios";

const baseConfig = {
  baseURL: "https://api.ote-godaddy.com/v1/domains/available?domain"
};

class Server {
  constructor(options = {}) {
    this.config = {
      ...baseConfig,
      ...options
    };
    this.api = axios.create({
      baseURL: this.config.baseURL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "sso-key UzQxLikm_46KxDFnbjN7cQjmw6wocia:46L26ydpkwMaKZV6uVdDWe"
      },
      withCredentials: false,
      crossDomain: true
    });
  }

  /* eslint-disable class-methods-use-this */
  logError(error) {
    console.log("Erreur !", error, error.response);
  }
}

export default Server;
