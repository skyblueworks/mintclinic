import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { serviceType } from "./serviceType";
import { teamMemberType } from "./teamMemberType";
import { pageType } from "./pageType";
import { homePageType } from "./homePageType";
import { aboutPageType } from "./aboutPageType";
import { contactPageType } from "./contactPageType";
import { mdxType } from "./mdxType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    mdxType,
    blockContentType,
    // Page types
    homePageType,
    aboutPageType,
    contactPageType,
    pageType,
    // Content types
    serviceType,
    teamMemberType,
    // Keep blog types for potential blog section
    categoryType,
    postType,
  ],
};
