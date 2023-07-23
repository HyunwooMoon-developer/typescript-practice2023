{
  const checkNotNull = <T>(arg: T | null): T => {
    if (arg == null) {
      throw new Error('Not valid number');
    } else {
      return arg;
    }
  };
}
