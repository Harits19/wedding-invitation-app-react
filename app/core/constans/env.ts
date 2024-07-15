export const kEnv = (() => {
  const env = {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL!,
    TOKEN: process.env.TOKEN,
    developeMode: true,
  };
  const emptyKey = Object.entries(env).filter((key) => {
    return !key;
  });
  if (emptyKey.length > 0) {
    throw `empty key on ${emptyKey.join(", ")}`;
  }

  return env;
})();
