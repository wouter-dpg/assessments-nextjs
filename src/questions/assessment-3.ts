// Sadly enough, not all libraries expose all types in their type definitions,
// but we do need them for proper typing.
// Replace the any types for the wrapper function without changing the original library
// or writing out the full types yourself.
import { fakeLibraryFunction } from "./utils/mock-lib";

interface WrapperFunctionParams {
  serviceName: string;
  params: any;
}

export function wrapperFunction({
  serviceName,
  params,
}: WrapperFunctionParams): any {
  console.log(`Calling ${serviceName} with params:`, params);
  return fakeLibraryFunction(params);
}
