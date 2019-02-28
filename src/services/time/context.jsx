// @flow strict
import * as React from 'react';

type Props = {|
  children: React.Node,
|};

type State = {|
  elapsedTime: number,
|};

type TimeContext = {|
  elapsetTime: number,
  pauseTimer: () => void,
  resumeTimer: () => void,
  resetTimer: () => void,
|};

const { Consumer, Provider } = React.createContext(
  ({
    elapsedTime: 0,
    pauseTimer: () => {},
    resumeTimer: () => {},
    resetTimer: () => {},
  }: TimeContext),
);

class TimeProvider extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      elapsedTime: 0,
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState(state => ({
        elapsedTime: state.elapsedTime + 1,
      }));
    }, 1000);
  };

  pauseTimer: () => {};

  resumeTimer: () => {};

  resetTimer: () => {};

  render() {
    const { elapsedTime } = this.state;
    const { children } = this.props;

    return (
      <Provider
        value={{
          elapsedTime,
          pauseTimer: this.pauseTimer,
          resumeTimer: this.resumeTimer,
          resetTimer: this.resetTimer,
        }}
      >
        {children}
      </Provider>
    );
  }
}

export { Consumer, TimeProvider as Provider };
