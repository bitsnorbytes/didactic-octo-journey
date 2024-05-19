import {createClient} from "@sanity/client";
import { 
  PUBLIC_PROJECT_ID,
  PUBLIC_DATASET,
  PUBLIC_API_VERSION
} from "$env/static/public";
export const client = createClient({
  projectId: PUBLIC_PROJECT_ID,
  dataset: PUBLIC_DATASET,
  apiVersion: PUBLIC_API_VERSION,
  useCdn: false
});
