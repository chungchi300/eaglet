export function getAuthorType(name: string) {
  if (name == "") {
    return "";
  }
  if (name.includes("jeff")) {
    return "Ninja - ";
  } else {
    return "Normal - ";
  }
}
export function numberType(num: number): string {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
