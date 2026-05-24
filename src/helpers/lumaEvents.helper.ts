import 'temporal-polyfill/global';
import type { LumaEvent, JsonLdEvent, JsonLdItemList } from '../types/luma';
import { extractJsonLdBlocks } from './jsonLd.helper';
import { sanitizeEventUrl } from './url.helper';

function isUpcomingEvent(event: JsonLdEvent, now: Temporal.Instant): boolean {
  try {
    return Temporal.Instant.from(event.startDate).epochMilliseconds > now.epochMilliseconds;
  } catch {
    return false;
  }
}

function toLumaEvent(event: JsonLdEvent, fallbackUrl: string): LumaEvent {
  return {
    title: event.name,
    start: Temporal.Instant.from(event.startDate).toString(),
    end: event.endDate ? Temporal.Instant.from(event.endDate).toString() : undefined,
    location: event.location?.name ?? 'Online Event',
    description: event.description,
    url: sanitizeEventUrl(event.url, fallbackUrl),
  };
}

function findNextEvent(blocks: unknown[], now: Temporal.Instant, fallbackUrl: string): LumaEvent | null {
  for (const block of blocks) {
    const list = block as JsonLdItemList;
    if (list['@type'] !== 'ItemList' || !Array.isArray(list.itemListElement)) continue;

    const upcoming = list.itemListElement
      .map(e => e.item)
      .filter(e => e['@type'] === 'Event' && isUpcomingEvent(e, now))
      .sort((a, b) => Temporal.Instant.from(a.startDate).epochMilliseconds - Temporal.Instant.from(b.startDate).epochMilliseconds);

    if (upcoming.length === 0) return null;
    return toLumaEvent(upcoming[0], fallbackUrl);
  }

  return null;
}

export async function fetchNextLumaEvent(calendarUrl: string): Promise<LumaEvent | null> {
  const res = await fetch(calendarUrl);
  if (!res.ok) throw new Error(`Luma fetch failed: ${res.status}`);

  const html = await res.text();
  const blocks = extractJsonLdBlocks(html);
  return findNextEvent(blocks, Temporal.Now.instant(), calendarUrl);
}
