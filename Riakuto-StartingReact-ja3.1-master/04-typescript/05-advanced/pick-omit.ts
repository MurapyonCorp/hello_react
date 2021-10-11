type Todo = {
  title: string;
  description: string;
  isDone: boolean;
};

type PickedTodo = Pick<Todo, 'title' | 'isDone'>;     //=> {title: string; isDone: boolean}
type OmittedTodo = Omit<Todo, 'description'>;         //=> {title: string; isDone: boolean}
