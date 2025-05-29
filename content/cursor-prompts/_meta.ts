import type { MetaRecord } from "nextra";

/**
 * type MetaRecordValue =
 *  | TitleSchema
 *  | PageItemSchema
 *  | SeparatorSchema
 *  | MenuSchema
 *
 * type MetaRecord = Record<string, MetaRecordValue>
 **/
const meta: MetaRecord = {
  "getting-started": {
    title: "Getting Started",
  },
  "nextjs-example": {
    title: "Next.js Example",
  },
};

export default meta;
