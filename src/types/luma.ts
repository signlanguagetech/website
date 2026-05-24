export interface LumaEvent {
  title: string;
  start: string;
  end?: string;
  location: string;
  description?: string;
  url: string;
}

export interface LumaEventCache {
  fingerprint: string;
  updatedAt: string;
  event: LumaEvent | null;
}

export interface JsonLdEvent {
  '@type': string;
  url: string;
  name: string;
  startDate: string;
  endDate?: string;
  description?: string;
  location?: { name?: string };
}

export interface JsonLdItemList {
  '@type': string;
  itemListElement: { item: JsonLdEvent }[];
}
