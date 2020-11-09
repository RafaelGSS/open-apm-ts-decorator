require('open-apm').init();

import { OpenAPMDecorator } from '..';

class ExampleClass {
  private msElapsed = 5000;

  @OpenAPMDecorator({ isAsync: true })
  public async exampleAsyncFunction() {
    await new Promise((resolve) => setTimeout(resolve, this.msElapsed));
  }
}

async function main() {
  const example = new ExampleClass();
  await example.exampleAsyncFunction();
}

main();
