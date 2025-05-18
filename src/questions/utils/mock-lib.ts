interface FakeLibraryFunctionParams {
  param1: string;
  param2: number;
  param3: boolean;
}

interface FakeLibraryFunctionResult {
  result1: string;
  result2: number;
  result3: boolean;
}

export function fakeLibraryFunction(
  params: FakeLibraryFunctionParams
): FakeLibraryFunctionResult {
  // Simulate some complex logic
  const result: FakeLibraryFunctionResult = {
    result1: params.param1.toUpperCase(),
    result2: params.param2 * 2,
    result3: !params.param3,
  };

  return result;
}
