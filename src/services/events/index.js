// @flow strict
import { AsyncStorage } from 'react-native';

const EVENTS_STORAGE_KEY = 'com.allio.nicholas.events';

type Event = {
  timestamp: string,
  name: string,
};

type Log = {
  [string]: Event,
};

export const POSITIVE_EVENTS = {
  GOOD_FOUL: {
    timestamp: '1551309169',
    name: 'good foul',
  },
  GOOD_NO_CALL: {
    timestamp: '1551309170',
    name: 'good no call',
  },
  GOOD_TRAVELING: {
    timestamp: '1551309171',
    name: 'good travelling',
  },
  GOOD_MECHANICS: {
    timestamp: '1551309172',
    name: 'good mechanics',
  },
};

export const NEGATIVE_EVENTS = {
  WRONG_MECHANICS: {
    timestamp: '1551309173',
    name: 'wrong mechanics',
  },
  WARNING_MISSED: {
    timestamp: '1551309174',
    name: 'warning missed',
  },
  WRONG_TRAVELLING: {
    timestamp: '1551309175',
    name: 'wrong travelling',
  },
  WRONG_RESET: {
    timestamp: '1551309176',
    name: 'wrong reset 14',
  },
};

export const trackEvent = (event: Event) => {
  return AsyncStorage.mergeItem(
    EVENTS_STORAGE_KEY,
    JSON.stringify({
      [event.timestamp]: event.name,
    }),
  );
};

export const getLog = (): Log => AsyncStorage.getItem(EVENTS_STORAGE_KEY).then(JSON.parse);

export const clearEvents = () => {
  AsyncStorage.clear();
};
