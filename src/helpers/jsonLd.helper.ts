export function extractJsonLdBlocks(html: string): unknown[] {
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
