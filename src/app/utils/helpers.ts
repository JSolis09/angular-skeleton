const createInstance = <T>(cls: any): T => {
  if (typeof cls !== 'function') {
    throw new Error('Invalid class');
  }
  return new cls();
};

const mapObject = <T>(response: object, cls: any) => {
  const instance = createInstance<T>(cls);
  Object.keys(instance).forEach((key) => {
    if (response.hasOwnProperty(key)) {
      instance[key] = response[key];
    }
  });
  return instance;
};

export function mapResponseObject<T>(response: any) {
  return (cls: any): T => mapObject<T>(response, cls);
}

export function mapResponseArray<T>(response: any[]) {
  return (cls: any): T[] => response
   .map((item) => mapObject<T>(item, cls));
}
