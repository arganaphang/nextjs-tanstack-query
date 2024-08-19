import { Todo } from "@/types/todo";

export async function getTodosAPI(): Promise<Todo[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  if (response.status !== 200) return [];
  const result = (await response.json()) as Todo[];
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  return result;
}
