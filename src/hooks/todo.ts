import { getTodosAPI } from "@/services/todo";
import { useQuery } from "@tanstack/react-query";

export function useTodosQuery() {
  return useQuery({ queryKey: ["todos"], queryFn: getTodosAPI });
}
