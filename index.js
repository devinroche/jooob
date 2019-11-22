const axios = require('axios');
const helpers = require('./helpers');

// main
async function fetchJobs(company) {
  try{

    const [ lever, greenhouse ] = await axios.all([fetchLeverJobs(company), fetchGreenhouseJobs(company)])

    return {
      ok: true,
      data: {
        company,
        lever,
        greenhouse
      }
    }
  } catch(e) {
    return {
      ok: false,
      error: e
    };
  }
}

// fetch greenhouse jobs
async function fetchGreenhouseJobs(company){
  try {
    const allJobs = [];

    const { data: { jobs } } = await axios.get(helpers.greenhouseUrl(company))

    jobs.forEach(job => {
      allJobs.push(helpers.formatGreenhouseResponse(job))
    })

    return allJobs
  }
  catch (e) {
    return []
  }
}

// fetch lever jobs
async function fetchLeverJobs(company){
  try {
  const allJobs = [];

  const { data } = await axios.get(helpers.leverUrl(company));

  data.forEach(job => {
    allJobs.push(helpers.formatLeverResponse(job))
  })

  return allJobs;
  } catch(e) {
    return []
  }
}

module.exports = async function main(company){
  if(!company || company.length <= 0 || typeof company !== "string"){
    throw new TypeError("not a string")
  }

  return await fetchJobs(company);
}