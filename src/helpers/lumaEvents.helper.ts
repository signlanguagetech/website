import type { LumaEvent, JsonLdItemList } from '../types/luma';

function extractJsonLdBlocks(html: string): unknown[] {
  const results: unknown[] = [];
  const parts = html.split('application/ld+json');

  for (let i = 1; i < parts.length; i++) {
    const start = parts[i].indexOf('>') + 1;
    const end = parts[i].indexOf('</script>');
    if (start === 0 || end === -1) continue;
    try {
      results.push(JSON.parse(parts[i].slice(start, end)));
    } catch {
      // malformed block, skip
    }
  }

  return results;
}

function parseNextEvent(blocks: unknown[], now: Date): LumaEvent | null {
  for (const block of blocks) {
    const list = block as JsonLdItemList;
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
}

export async function fetchNextLumaEvent(calendarUrl: string): Promise<LumaEvent | null> {
  const res = await fetch(calendarUrl);
  if (!res.ok) throw new Error(`Luma fetch failed: ${res.status}`);

  const html = await res.text();
  const blocks = extractJsonLdBlocks(html);
  return parseNextEvent(blocks, new Date());
}
