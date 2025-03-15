function script1() {
  var a = 1;

  var result = {
    a1: 1,
    b2: 2,
    stringProperty: 'string1',
    test: function () {
      console.log({ a });
    },
  };

  return function () {
    console.log({ a });
  };
}

function funcWithIncreasedValue() {
  let value = 0;

  return {
    increase: function () {
      return ++value;
    },
    decrease: () => --value,
    value: () => value,
  };
}
