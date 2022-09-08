interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

interface RaceDateTime {
  date: string;
  time: string;
}

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: RaceDateTime;
  SecondPractice: RaceDateTime;
  ThirdPractice: RaceDateTime;
  Qualifying: RaceDateTime;
  Sprint: RaceDateTime;
}

interface RaceTable {
  season: string;
  Races: Race[];
}

interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  RaceTable: RaceTable;
}

export interface RaceResponse {
  MRData: MRData;
}
