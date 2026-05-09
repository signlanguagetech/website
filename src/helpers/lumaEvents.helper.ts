export interface LumaEvent {
  title: string;
  start: string;
  end?: string;
  location: string;
  description?: string;
  url: string;
}

interface JsonLdEvent {
  '@type': string;
  url: string;
  name: string;
  startDate: string;
  endDate?: string;
  description?: string;
  location?: { name?: string };
}

interface JsonLdItemList {
  '@type': string;
  itemListElement: { item: JsonLdEvent }[];
}

export async function fetchNextLumaEvent(calendarUrl: string): Promise<LumaEvent | null> {
  try {
    const res = await fetch(calendarUrl);
    const html = await res.text();

    const matches = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    const now = new Date();

    for (const match of matches) {
      let data: unknown;
      try { data = JSON.parse(match[1]); } catch { continue; }

      const list = data as JsonLdItemList;
      if (list['@type'] !== 'ItemList' || !Array.isArray(list.itemListElement)) continue;

      const upcoming = list.itemListElement
        .map(e => e.item)
        .filter(e => e['@type'] === 'Event' && new Date(e.startDate) > now)
        .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

      if (upcoming.length === 0) return null;

      const e = upcoming[0];
      return {
        title: e.name,
        start: new Date(e.startDate).toISOString(),
        end: e.endDate ? new Date(e.endDate).toISOString() : undefined,
        location: e.location?.name ?? 'Online Event',
        description: e.description,
        url: e.url,
      };
    }

    return null;
  } catch {
    return null;
  }
}
