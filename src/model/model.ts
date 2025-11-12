import type { DataEntryMap } from "astro:content";

export type Pixel = `${string}px`;

export interface Tag {
  readonly tag: string;
  readonly count: number;
}

export type ContentKeys = keyof DataEntryMap;

export interface Engineer {
  id: string;
  name: string;
  image: string;
  alt: string;
  description: string;
  social: {
    linkedin: string;
    twitter: string;
  };
}

// Calendar scheduling interfaces
export interface CalendarSchedulingConfig {
  readonly url: string;
  readonly color: string;
  readonly label: string;
  readonly target: HTMLElement | null;
}

export interface CalendarSchedulingButton {
  load(config: CalendarSchedulingConfig): void;
}

export interface Calendar {
  readonly schedulingButton: CalendarSchedulingButton;
}

// Global calendar declaration for window object
declare global {
  interface Window {
    calendar: Calendar;
  }
}
