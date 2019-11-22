# @devinroche/jooob
> quick way to get all jobs from lever and greenhouse based on a job

## How to use it
jooob returns a Promise.
```
const jooob = require('@devinroche/jooob');

async function main(){
  const { data } = await jooob('robinhood') // only accepts strings
}
```

Data will be formatted as such
```
{
  ok: true,
  data: {
    companyName,
    lever: [{ location, team, posted, text, hostedUrl, applyUrl }],
    greenhouse: [{ title, posted, location, url }]
  }
}
```