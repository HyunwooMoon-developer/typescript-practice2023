{
  /**
   * Type Alias
   */

  type Text = string;
  type Num = number;

  const name: Text = 'moon';

  type Student = {
    name: Text;
    age: Num;
  };

  /**
   * String Literal Types
   */

  type Moon = 'Moon';

  let moon: Moon = 'Moon';
}
