export default (length, fun) => [
  ...Array(length).keys(),
].map(fun);
