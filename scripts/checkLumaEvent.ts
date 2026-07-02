import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fetchNextLumaEvent } from '../src/helpers/lumaEvents.helper.ts';
import type { LumaEvent, LumaEventCache } from '../src/types/luma.ts';

const CACHE_PATH = resolve(import.meta.dirname, '../src/data/luma-event-cache.json');
const CALENDAR_URL = 'https://luma.com/signlanguagetech';

function fingerprint(event: LumaEvent | null): string {
  return event ? `${event.title}|${event.start}|${event.end ?? ''}` : 'no-event';
}

function readCache(): LumaEventCache | null {
  return existsSync(CACHE_PATH) ? JSON.parse(readFileSync(CACHE_PATH, 'utf-8')) : null;
}

function writeCache(event: LumaEvent | null): void {
  const cache: LumaEventCache = { fingerprint: fingerprint(event), updatedAt: new Date().toISOString(), event };
  writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

let next: LumaEvent | null;
try {
  next = await fetchNextLumaEvent(CALENDAR_URL);
} catch (err) {
  console.error('fetch failed, skip:', err);
  process.exit(0);
}

const cached = readCache();

if (cached?.fingerprint === fingerprint(next)) {
  console.log('same event, skip');
  process.exit(0);
}

writeCache(next);
console.log('event changed, cache updated');
