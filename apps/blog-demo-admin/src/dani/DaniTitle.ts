import { Dani as TDani } from "../api/dani/Dani";

export const DANI_TITLE_FIELD = "oneMore";

export const DaniTitle = (record: TDani): string => {
  return record.oneMore || String(record.id);
};
