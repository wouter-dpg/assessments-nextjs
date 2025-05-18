import { assert } from "./utils/assert";
// Implement the function isUserData and isDetailedError functions in a type-safe way.
// The isUserData function should return true if the response is of type UserData.
// The isDetailedError function should return true if the response is of type DetailedErrorData.

// You can run this script with:
// ASSESSMENT=2 npm run assessment

interface UserData {
  type: "user";
  id: number;
  name: string;
  email: string;
}

interface ErrorData {
  type: "error";
  errorCode: number;
  message: string;
}

interface DetailedErrorData extends ErrorData {
  stack: string[];
}

type ApiResponse = UserData | ErrorData;
type EnhancedApiResponse = UserData | ErrorData | DetailedErrorData;

function isUserData(response: ApiResponse | EnhancedApiResponse) {
  // Implement me!
  return;
}

function isDetailedError(response: ApiResponse | EnhancedApiResponse) {
  // Implement me!
  return;
}

function handleApiResponse(
  response: ApiResponse | EnhancedApiResponse
): string {
  if (isUserData(response)) {
    console.log("✅ User Info:");
    console.log(`ID: ${response.id}`);
    console.log(`Name: ${response.name}`);
    console.log(`Email: ${response.email}`);
    return "user data";
  } else if (isDetailedError(response)) {
    console.warn("⚠️ Detailed API Error:");
    console.warn(`Code: ${response.errorCode}`);
    console.warn(`Message: ${response.message}`);
    console.warn(`Stack Trace:`);
    response.stack.forEach((line, index) =>
      console.warn(`${index + 1}. ${line}`)
    );
    return "detailed error";
  } else {
    console.error("❌ API Error:");
    console.error(`Code: ${response.errorCode}`);
    console.error(`Message: ${response.message}`);
    return "plain error";
  }
}

const responses: EnhancedApiResponse[] = [
  {
    type: "user",
    id: 101,
    name: "Alice",
    email: "alice@example.com",
  },
  {
    type: "error",
    errorCode: 500,
    message: "Internal server error",
  },
  {
    type: "error",
    errorCode: 404,
    message: "Not found",
    stack: ["at handleRequest()", "at process()"],
  },
];

assert(
  handleApiResponse(responses[0]) === "user data",
  "User data should be handled correctly"
);
assert(
  handleApiResponse(responses[1]) === "plain error",
  "Plain error should be handled correctly"
);

assert(
  handleApiResponse(responses[2]) === "detailed error",
  "Detailed error should be handled correctly"
);
