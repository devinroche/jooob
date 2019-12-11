# @devinroche/jooob
> quick way to get all jobs from lever and greenhouse based on a job

## How to use it
jooob has two main functions.

### Jobs
```
const jooob = require('@devinroche/jooob');

async function main(){
  const { data } = await jooob.jobs('robinhood') // only accepts strings
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

### Get Tech Tags
```
const jooob = require('@devinroche/jooob');

async function main(){
  const data = jooob.getTechTags(['segment', 'optimizely']); // only takes an array
}
```

Data will be formatted as such
```
[ { name: 'Optimizely',
    site: 'optimizely.com',
    description: 'Optimizely is an American company that makes customer experience optimization software for other companies.' },
  { name: 'Segment',
    site: 'segment.com',
    description: 'Segment is the single platform that collects, translates, and routes your user data to hundreds of analytics & marketing tools with the flip of a switch.' } ]
```