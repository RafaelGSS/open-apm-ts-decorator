import 'open-apm';
import { OpenAPMDecorator } from '..';

describe('OpenAPMDecorator', () => {
  describe('no args', () => {
    let descriptor: any;
    let decorate: any;

    beforeEach(() => {
      // eslint-disable-next-line no-new-wrappers
      descriptor = { value: () => new Number(1) };
      decorate = OpenAPMDecorator({});
      decorate({}, 'example key', descriptor);
    });

    it('should return function', () => {
      expect(decorate).toBeInstanceOf(Function);
    });

    it('should replace the descriptor.value with agent.wrap', () => {
      expect(descriptor.value).toBeInstanceOf(Function);
      expect(descriptor.value).toThrowError('The current context not exists');
    });
  });

  describe('with async', () => {
    let descriptor: any;
    let decorate: any;

    beforeEach(() => {
      // eslint-disable-next-line no-new-wrappers
      descriptor = { value: async () => new Number(1) };
      decorate = OpenAPMDecorator({ isAsync: true });
      decorate({}, 'example key', descriptor);
    });

    it('should return function', () => {
      expect(decorate).toBeInstanceOf(Function);
    });

    it('should replace the descriptor.value with agent.wrap', async () => {
      expect(descriptor.value).toBeInstanceOf(Function);
      expect(descriptor.value).toThrowError('The current context not exists');
    });
  });
});
