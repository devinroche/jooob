module.exports = {
  leverUrl: (company) => `https://api.lever.co/v0/postings/${company}?mode=json`,
  greenhouseUrl: (company) => `https://boards-api.greenhouse.io/v1/boards/${company}/jobs`,
  formatLeverResponse: (data) => {
    return {
      location: data.categories.location,
      team: data.categories.team,
      posted: data.createdAt,
      text: data.text,
      hostedUrl: data.hostedUrl,
      applyUrl: data.applyUrl
    }
  },
  formatGreenhouseResponse: (data) =>{
    return {
      title: data.title,
      posted: data.updated_at,
      location: data.location.name,
      url: data.absolute_url
    }
  }
}