export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

type LoggerServiceCallback = (arg: string) => void;

export const calculateComplexity = (stringInfo: stringInfo) => {
  if (!stringInfo.extraInfo) 
    return null;

  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
};

export const toUpperCaseWithCb = (arg: string, callback: LoggerServiceCallback) => {
    if(!arg) {
        callback('Invalid argument!');
        return;
    }

    callback(`Called function with ${arg}`);

    return arg.toUpperCase();

}
