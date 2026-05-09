import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchNextLumaEvent } from '../src/helpers/lumaEvents.helper.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CACHE_PATH = resolve(__dirname, '../src/data/luma-event-cache.json');
const CALENDAR_URL = 'https://luma.com/signlanguagetech';

interface EventCache {
  fingerprint: string;
  updatedAt: string;
}

const next = await fetchNextLumaEvent(CALENDAR_URL);

const fingerprint = next
  ? `${next.title}|${next.start}|${next.end ?? ''}`
  : 'no-event';

const cached: EventCache | null = existsSync(CACHE_PATH)
  ? JSON.parse(readFileSync(CACHE_PATH, 'utf-8'))
  : null;

if (cached?.fingerprint === fingerprint) {
  console.log('same event, skip');
  process.exit(0);
}

const cache: EventCache = { fingerprint, updatedAt: new Date().toISOString() };
writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
console.log('event changed, cache updated');
