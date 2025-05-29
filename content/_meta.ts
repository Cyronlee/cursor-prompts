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
  index: {
    title: "Home",
    type: "page",
  },
  "cursor-prompts": {
    title: "Cursor prompts",
    type: "page",
  },
  "cursor-rules": {
    title: "Cursor rules",
    type: "page",
  },
};

export default meta;
