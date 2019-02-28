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
  toggleTimer: () => void,
  resetTimer: () => void,
|};

const { Consumer, Provider } = React.createContext(
  ({
    elapsedTime: 0,
    toggleTimer: () => {},
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

  toggleTimer = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    } else {
      this.interval = setInterval(() => {
        this.setState(state => ({
          elapsedTime: state.elapsedTime + 1,
        }));
      }, 1000);
    }
  };

  resetTimer = () => {
    clearInterval(this.interval);
    this.interval = null;
    this.setState({
      elapsedTime: 0,
    });
  };

  render() {
    const { elapsedTime } = this.state;
    const { children } = this.props;

    return (
      <Provider
        value={{
          elapsedTime,
          toggleTimer: this.toggleTimer,
          resetTimer: this.resetTimer,
        }}
      >
        {children}
      </Provider>
    );
  }
}

export { Consumer, TimeProvider as Provider };
