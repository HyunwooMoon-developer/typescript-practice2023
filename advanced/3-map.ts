{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type ReadOnlyVideo = ReadOnly<Video>;

  /* type VideoOnly = {
    readonly title: string;
    readonly author: string;
    readonly description: string;
  }; */

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for ... in
  };

  type VideoOptional = Optional<Video>;

  /*   type VideoOptional = {
    title?: string;
    author?: string;
  };
  */

  type Nullable<T> = { [P in keyof T]: T[P] | null };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
