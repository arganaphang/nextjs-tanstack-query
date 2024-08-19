import { useQueryClient } from "@tanstack/react-query";
import React from "react";

const Button = () => {
  const queryClient = useQueryClient();
  return (
    <button
      onClick={() => {
        queryClient.refetchQueries({
          queryKey: ["todos"],
        });
      }}
    >
      invalidate
    </button>
  );
};

export default Button;
