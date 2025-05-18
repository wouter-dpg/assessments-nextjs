// Implement the type of the API response so that it can be used in the function below.

type ApiResponse = {
  data: any;
};

type User = { id: number; name: string };

const response: ApiResponse<User> = {
  data: { id: 1, name: "Alice" },
};
