import { isArray, flatMap, map, keys, isPlainObject, concat } from "lodash";

export function paths(obj: any, parentKey?: string): string[] {
  var result: string[] = [];
  if (isArray(obj)) {
    return concat(result, parentKey || []);
  } else if (isPlainObject(obj)) {
    result = flatMap(keys(obj), function (key) {
      return map(paths(obj[key], key), function (subkey) {
        return (parentKey ? parentKey + "." : "") + subkey;
      });
    });
  } else {
    result = [];
  }
  return concat(result, parentKey || []);
}

