import fetch from 'isomorphic-unfetch'
import base64 from "base-64";

module.exports = (req, res) => {
    let url = "https://api.github.com/repos/dev-kashmir/dev-kashmir-website/actions/workflows/input.yml/dispatches"
    fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `Basic ${base64.encode(
            `haideralipunjabi:${process.env.GITHUB_TOKEN}`
          )}`,
        },
        body: req.body
      }).then(r=>r.text()).then(data=>{
        res.json({
            body: data,
          })
      });
    
  }
