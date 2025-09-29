import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { serviceType } from "./serviceType";
import { teamMemberType } from "./teamMemberType";
import { pageType } from "./pageType";
import { homePageType } from "./homePageType";
import { mdxType } from "./mdxType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    mdxType,
    blockContentType,
    homePageType,
    serviceType,
    teamMemberType,
    pageType,
    // Keep blog types for potential blog section
    categoryType,
    postType,
  ],
};
