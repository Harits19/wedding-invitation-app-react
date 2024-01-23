const envKeyListNumber = ["PORT", "DUMMY_NUMBER"] as const;
const envKeyListString = ["API_KEY"] as const;
type EnvKeyString = (typeof envKeyListString)[number];
type EnvKeyNumber = (typeof envKeyListNumber)[number];

const getEnvValue = () => {
  const envValueObject: {
    string: {
      [key in EnvKeyString]?: string;
    };
    number: {
      [key in EnvKeyNumber]?: number;
    };
  } = {
    number: {},
    string: {},
  };
  for (const key of [...envKeyListString, ...envKeyListNumber]) {
    const envValue = process.env[key];
    if (envValue === undefined) {
      throw new Error(`empty value for env key ${key}`);
    }
    const isNumber = (key: string): key is EnvKeyNumber =>
      envKeyListNumber.some((value) => value === key);

    if (isNumber(key)) {
      const numberVal = Number(envValue);
      envValueObject.number[key] = numberVal;
    } else {
      envValueObject.string[key] = envValue;
    }
  }

  return envValueObject as {
    string: {
      [key in EnvKeyString]?: string;
    };
    number: {
      [key in EnvKeyNumber]?: number;
    };
  };
};
