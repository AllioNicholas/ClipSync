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

export const trackEvent = (event: Event) => {
  return AsyncStorage.mergeItem(
    EVENTS_STORAGE_KEY,
    JSON.stringify({
      [event.timestamp]: event.name,
    }),
  );
};

export const getLog = () => AsyncStorage.getItem(EVENTS_STORAGE_KEY).then(JSON.parse);

export const clearEvents = () => {
  AsyncStorage.clear();
};
