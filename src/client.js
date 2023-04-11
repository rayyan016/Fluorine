// import sanityClient from "@sanity/client";

// export default sanityClient({
//     projectId: "lponqi1p",
//     dataset: "production"
// })

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: "lponqi1p",
  dataset: "production",
  useCdn: false, // set to `true` to fetch from edge cache

})

export default client;