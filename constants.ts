
import { PhilosophyData, CapabilityPoint } from './types';

export const PHILOSOPHIES: PhilosophyData[] = [
  {
    id: 'airtable',
    title: 'Airtable',
    emoji: '🏰',
    subtitle: '"The Glass Cathedral"',
    description: 'Designed to impress. A Platform-as-a-Service for the non-technical elite.',
    strength: 'Visual Velocity. Dashboards that look like custom SaaS apps.',
    tradeoff: 'Shallow Logic. Formulas are Excel-lite. No loops.',
    idealFor: 'Front-Office, Marketing, Brand Managers.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'grist',
    title: 'Grist',
    emoji: '🛠️',
    subtitle: '"The Alchemist\'s Lab"',
    description: 'Utilitarian and infinite. Hands you a welding torch (Python) and asks what you want to build.',
    strength: 'Infinite Manipulation. Python as a first-class citizen.',
    tradeoff: 'The Learning Cliff. Requires technical courage.',
    idealFor: 'Back-Office, Operations, Data-Heavy Logistics.',
    color: 'text-amber-800',
    bgColor: 'bg-amber-50'
  }
];

export const CAPABILITY_DATA: CapabilityPoint[] = [
  { attribute: 'Visual Polish', airtable: 10, grist: 4, fullMark: 10 },
  { attribute: 'Logic Depth', airtable: 3, grist: 10, fullMark: 10 },
  { attribute: 'Setup Speed', airtable: 10, grist: 5, fullMark: 10 },
  { attribute: 'Scalability', airtable: 4, grist: 9, fullMark: 10 },
  { attribute: 'Cost Efficiency', airtable: 3, grist: 9, fullMark: 10 },
];

export const COST_DATA = [
  { name: 'Airtable (Business)', cost: 12960 },
  { name: 'Grist (Pro)', cost: 1920 }
];

export const SIM_CONSTANTS = {
  TARGET_WORDS: 80000,
  DAILY_PACE: 1200,
  DEADLINE_DAYS: 14
};
