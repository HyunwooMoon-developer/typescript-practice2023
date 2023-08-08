{
  class TimeoutError extends Error {}

  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new Error('No Network!');
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
