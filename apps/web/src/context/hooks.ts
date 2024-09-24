import { Context, useContext } from 'react';

// Use this hook yo prevent using context without his provider
export const useContextWithError = <T>(
  context: Context<T | undefined>,
  hookName: string,
  providerName: string,
) => {
  const ctx = useContext(context);

  if (ctx === undefined)
    throw new Error(`${hookName} must be used within ${providerName}`);
  return ctx;
};
