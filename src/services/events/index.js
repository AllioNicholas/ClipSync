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
    name: 'good foul',
  },
  GOOD_NO_CALL: {
    name: 'good no call',
  },
  GOOD_TRAVELING: {
    name: 'good travelling',
  },
  GOOD_MECHANICS: {
    name: 'good mechanics',
  },
};

export const NEGATIVE_EVENTS = {
  WRONG_MECHANICS: {
    name: 'wrong mechanics',
  },
  WARNING_MISSED: {
    name: 'warning missed',
  },
  WRONG_TRAVELLING: {
    name: 'wrong travelling',
  },
  WRONG_RESET: {
    name: 'wrong reset 14',
  },
};

export const getLog = (): Log => AsyncStorage.getItem(EVENTS_STORAGE_KEY).then(JSON.parse);

export const trackEvent = (event: Event) => {
  getLog().then(events => {
    if (events) {
      const existingEvent = events[event.timestamp];
      if (existingEvent) {
        const eventsArray = [event.name].concat(existingEvent);
        return AsyncStorage.mergeItem(
          EVENTS_STORAGE_KEY,
          JSON.stringify({
            [event.timestamp]: eventsArray,
          }),
        );
      }
    }

    return AsyncStorage.mergeItem(
      EVENTS_STORAGE_KEY,
      JSON.stringify({
        [event.timestamp]: event.name,
      }),
    );
  });
};

export const clearEvents = () => {
  AsyncStorage.clear();
};
