import * as dotenv from "dotenv";

dotenv.config();

import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET;

export default defineCliConfig({
  api: {
    projectId: "uzgis1yj",
    dataset: "production",
  },
});
