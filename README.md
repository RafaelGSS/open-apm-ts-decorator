# Open APM Typescript Decorator

TS Wrapper to Open APM

## Install

```sh
yarn add open-apm-ts-decorator
```

or with NPM

```sh
npm install -S open-apm-ts-decorator
```

## Usage

```java
class MyTestClass {
  // All of these arguments are optional
  @XRayInstrumented({
    name: "customFunctionName", // by default it's name of called function
    isAsync: true // Add if your function returns a promise
  })
  someAsyncMethod(input: number): Promise<any> {
    ...
  }
}
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/RafaelGSS/open-apm-ts-decorator/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

This project is [MIT](https://github.com/RafaelGSS/open-apm-ts-decorator/blob/master/LICENSE) licensed.
