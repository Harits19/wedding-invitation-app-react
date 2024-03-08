export class SqlUtil {
  static generateOrCondition = (val: Record<string, unknown>) => {
    const conditions = Object.entries(val)
      .filter(([, value]) => {
        return Boolean(value);
      })
      .map(([key, value]) => {
        return `${key}='${value}'`;
      })
      .join("OR");

    return conditions;
  };
}
