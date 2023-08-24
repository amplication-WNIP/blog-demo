import { Dani as TDani } from "../api/dani/Dani";

export const DANI_TITLE_FIELD = "userId";

export const DaniTitle = (record: TDani): string => {
  return record.userId || String(record.id);
};
