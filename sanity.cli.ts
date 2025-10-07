/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from "sanity/cli";
import { sanity } from "./lib/env";

export default defineCliConfig({
  api: {
    projectId: sanity.projectId,
    dataset: sanity.dataset,
  },
});
