{
  /**
   * Union Types: OR
   */

  type Direction = 'left' | 'right' | 'up' | 'down';

  function move(direction: Direction) {
    console.log(direction);
  }

  move('left');

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: 'logged in',
      },
    };
  }

  //PrintLoginState(state)
  //success => body
  // fail => reason

  function loginResult(id: string, password: string): LoginState {
    if (id && password) {
      return {
        response: {
          body: 'logged in successful',
        },
      };
    } else {
      return {
        reason: 'some data missed',
      };
    }
  }

  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`success! ${state.response.body}`);
    } else {
      console.log(`'failed ${state.reason}`);
    }
  }
}
