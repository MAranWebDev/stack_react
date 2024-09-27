import { Context, useContext } from 'react';

// Use this hook to prevent using context without his provider
export const useContextWithError = <TContext>(
  context: Context<TContext | undefined>,
  hookName: string,
  providerName: string,
) => {
  const ctx = useContext(context);

  if (ctx === undefined)
    throw new Error(`${hookName} must be used within ${providerName}`);
  return ctx;
};
