import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  // USER

  static async loginUser(userInfo) {

    let res = await this.request(`auth/token`, userInfo, "post")

    console.log(res)

    return res.token

  }

  static async signUpUser(userInfo) {

    let res = await this.request(`auth/register`, userInfo, "post")

    console.log(res)

    return res.token

  }

  static async editUser(userInfo, username) {

    let res = await this.request(`users/${username}`, userInfo, "patch")

    console.log(res)

    return res

  }

  static async getUserInfo(username) {

    let res = await this.request(`users/${username}`)

    console.log(res)

    return res

  }

  // COMPANIES

  /** Get details on all companies. */

  static async getCompanies(search) {

    if (search) {

      console.log("Search!")

      let res = await this.request(`companies`, search);
      return res.companies;

    } else {

      console.log("No Search")

      let res = await this.request(`companies`);
      return res.companies;

    }
  }

  /** Get details on a company by handle. <= THIS WAS THE PROVIDED EXAMPLE */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // JOBS

  /** Get details on all jobs. */

  static async getJobs(search) {

    if (search) {

      console.log("Search!")

      let res = await this.request(`jobs`, search);
      return res.jobs;

    } else {

      console.log("No Search")

      let res = await this.request(`jobs`);
      return res.jobs;

    }
  }

  /** Apply to a job. */

  static async applyJob(id, username) {

    console.log(id)
    console.log(username)

    let res = await this.request(`users/${username}/jobs/${id}`, null, "post")

    return res

  }

  /** Get details on a job by id. - NOT USED */

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }


}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";


export default JoblyApi;