"use client";
import { useTodosQuery } from "@/hooks/todo";
import Button from "./_components/button";

export default function Page() {
  const todosQuery = useTodosQuery();
  if (todosQuery.isError) {
    return <p>{todosQuery.error.message}</p>;
  }
  if (todosQuery.isLoading) {
    return <p>LOADING....</p>;
  }
  if (todosQuery.isFetching) {
    return <p>FETCHING....</p>;
  }
  return (
    <div className="min-h-screen w-full flex">
      <div className="flex-1 flex flex-col justify-center">
        {todosQuery.data?.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.userId}
          </li>
        ))}
      </div>
      <div className="flex-1 flex h-screen w-full justify-center items-center">
        <Button />
      </div>
    </div>
  );
}
