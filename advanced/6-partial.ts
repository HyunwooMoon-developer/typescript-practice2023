{
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>): Todo => {
    return { ...todo, ...fieldsToUpdate };
  };

  const todo: Todo = {
    title: 'Learn TypeScript',
    description: 'TypeScript',
    label: 'TypeScript',
    priority: 'high',
  };

  updateTodo(todo, { priority: 'low' });
}
