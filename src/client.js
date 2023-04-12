import {createClient} from '@sanity/client'

const client = createClient({
  projectId: "lponqi1p",
  dataset: "production",
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12',
})
export default client;
