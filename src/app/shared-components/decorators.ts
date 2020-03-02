export function RequiredProperty(target: object, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    get() {
      throw new Error(`The Property ${propertyKey} must be defined for this component)}`);
    },
    set(value) {
      Object.defineProperty(target, propertyKey, {value, writable: true, configurable: true});
    },
    enumerable: true,
    configurable: true
  });
}

export function UpperCase(target: any, key: string) {
  var value : any = target[key];

  const getter = function() {
    return value;
  };

  const setter = function(newVal) {
    value = newVal.toUpperCase();
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

export function LogProperty(target: any, key: string) {
  let value;

  const getter = function() {
    console.log(`Getting: ${key} => ${value}`)
    return value;
  };

  const setter = function(newVal) {
    console.log(`Setting: ${key} => ${newVal}`)
    value = newVal;
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}
