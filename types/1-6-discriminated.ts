{
  // function: login -> success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'success',
      },
    };
  }

  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      return {
        result: 'success',
        response: {
          body: 'success',
        },
      };
    } else {
      return {
        result: 'fail',
        reason: 'fail',
      };
    }
  }
}
