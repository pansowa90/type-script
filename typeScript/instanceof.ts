type TDate = Date | string;

function getValue(value: TDate) {
  if (value instanceof Date) {
    return value.toUTCString();
  } else {
    return value.toUpperCase();
  }
}

