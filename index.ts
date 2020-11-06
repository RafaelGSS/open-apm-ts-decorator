import { globalAgent } from 'open-apm';

export type DecoratorArgs = {
  name?: string;
  isAsync?: boolean;
};

export function OpenAPMDecorator({ name, isAsync }: DecoratorArgs): any {
  return function (_target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    if (typeof descriptor.value !== 'function') {
      return descriptor;
    }
    const method = descriptor.value;
    const subsegmentName = name || methodName;
    // eslint-disable-next-line no-param-reassign
    descriptor.value = globalAgent.wrap(method, subsegmentName, isAsync);

    return descriptor;
  };
}
