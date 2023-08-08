{
  class TimeoutError extends Error {}

  class OfflineError extends Error {}

  type SuccessState = {
    result: 'success';
  };

  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      throw new OfflineError('No Network!');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();

      // login
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  service.login();

  class App {
    constructor(private userService: UserService) {}

    run() {
      try {
        this.userService.login();
      } catch (err) {
        // show dialog to user
      }
    }
  }

  const app = new App(service);
  app.run();
}
