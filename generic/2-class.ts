{
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftVlaue: L, private rightValue: R) {}

    left(): L {
      return this.leftVlaue;
    }

    right(): R {
      return this.rightValue;
    }
  }

  const either = new SimpleEither(4, '5');
}
