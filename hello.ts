export function removeLastStacktrace(err: Error): Error {
  const stackRows = err.stack?.split('\n');
  console.log("### stackRows", stackRows);
  stackRows?.splice(1, 1);
  err.stack = stackRows?.join('\n');
  return err;
}

function throwNotExist(resource: string): never {
  const error = new Error(`${resource} is not found`)
  removeLastStacktrace(error);
  throw error;
}

const hello: string = null ?? throwNotExist('name');
console.log('### name', hello);
