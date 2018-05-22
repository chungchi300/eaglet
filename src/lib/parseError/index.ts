function getErrorKey(validationErrorItem) {
  if (validationErrorItem.origin == "FUNCTION") {
    return "_error";
  } else {
    return validationErrorItem.path;
  }
}
function parseSequenlizeValidationErrorItems(validationErrorItems) {
  // console.log('validationErrorItems', validationErrorItems);
  let errorsObj = {};
  validationErrorItems.forEach(validationErrorItem => {
    if (errorsObj[getErrorKey(validationErrorItem)]) {
      //if already have that error msg,no need to assign it data structure
      return;
    }
    errorsObj[getErrorKey(validationErrorItem)] = validationErrorItem.message;
  });

  return errorsObj;
}
export function sequenlize(err) {
  // if(errors)

  return Object.assign(err, {
    errors: parseSequenlizeValidationErrorItems(err.errors)
  });
}
export function basic(err) {
  return Object.assign(err, { errors: { _error: err.message } });
}
