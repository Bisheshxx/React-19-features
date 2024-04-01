import CustomCheckbox from "../shared/components/CustomCheckbox";
import { Checkbox } from "@material-tailwind/react";

const TodoList = ({ todo }) => {
  return (
    <article>
      {todo.map(_ => (
        <div
          className={`text-3xl font-bold flex gap-2  ${
            _.completed ? "line-through" : ""
          } items-center`}
          key={_.id}
        >
          <Checkbox
            defaultChecked={_.completed}
            ripple={false}
            className="h-8 w-8 rounded-full border-white-900/20 bg-white-900/10 transition-all hover:scale-105 hover:before:opacity-0"
            color="green"
          />
          {_.task}
          {_?.sending && <small>{` (Sending...)`}</small>}
        </div>
      ))}
    </article>
  );
};

export default TodoList;
