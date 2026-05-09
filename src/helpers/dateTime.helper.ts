/**
 * DateTime Helper - Handles date/time formatting with timezone support
 * Following Single Responsibility Principle (SRP)
 */

/** Gets the user's timezone identifier (e.g., "America/New_York") */
export const getUserTimezone = (): string => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

/** Gets the short timezone abbreviation (e.g., "EST", "PST") */
export const getTimezoneAbbreviation = (): string => {
  const timeString = new Date().toLocaleTimeString('en-US', { timeZoneName: 'short' });
  return timeString.split(' ').pop() ?? '';
};

/** Date formatting options for event display */
const createDateFormatOptions = (timezone: string): Intl.DateTimeFormatOptions => ({
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: timezone,
});

/** Time formatting options for event display */
const createTimeFormatOptions = (timezone: string): Intl.DateTimeFormatOptions => ({
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
  timeZone: timezone,
});

/** Formats a date for event display (e.g., "Wednesday, January 21, 2026") */
export const formatEventDate = (date: Date, timezone: string): string => {
  const options = createDateFormatOptions(timezone);
  return date.toLocaleDateString('en-US', options);
};

/** Formats a time for event display (e.g., "6:00 PM") */
export const formatEventTime = (date: Date, timezone: string): string => {
  const options = createTimeFormatOptions(timezone);
  return date.toLocaleTimeString('en-US', options);
};

/** Formats a time range with timezone (e.g., "6:00 PM - 9:00 PM EST") */
export const formatTimeRange = (
  startDate: Date,
  endDate: Date | null,
  timezone: string,
  timezoneAbbr: string
): string => {
  let timeRange = formatEventTime(startDate, timezone);

  if (endDate) {
    const endTime = formatEventTime(endDate, timezone);
    timeRange = `${timeRange} - ${endTime}`;
  }

  return `${timeRange} ${timezoneAbbr}`;
};

/** Parses event datetime strings and returns formatted display values */
export interface FormattedEventDateTime {
  date: string;
  time: string;
}

export const parseAndFormatEventDateTime = (
  startDateStr: string,
  endDateStr?: string | null
): FormattedEventDateTime => {
  const startDate = new Date(startDateStr);
  const endDate = endDateStr ? new Date(endDateStr) : null;
  const timezone = getUserTimezone();
  const timezoneAbbr = getTimezoneAbbreviation();

  return {
    date: formatEventDate(startDate, timezone),
    time: formatTimeRange(startDate, endDate, timezone, timezoneAbbr),
  };
};

