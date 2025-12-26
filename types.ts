
export enum UrgencyStatus {
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export interface PhilosophyData {
  id: 'airtable' | 'grist';
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  strength: string;
  tradeoff: string;
  idealFor: string;
  color: string;
  bgColor: string;
}

export interface CapabilityPoint {
  attribute: string;
  airtable: number;
  grist: number;
  fullMark: number;
}

export interface SimulationState {
  currentWords: number;
  targetWords: number;
  dailyPace: number;
  deadlineDays: number;
}
