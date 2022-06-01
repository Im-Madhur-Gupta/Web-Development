// TS thing
// Enumerated global set of constants.

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

console.log(Role);

// Role.ADMIN is 0.
// Role.READ_ONLY is 1.
// Role.AUTHOR is 2.

// custom value wala Enum -
// kuch bhi value daal sakte ho constants ke corresponding
enum CustomRole {
  ADMIN = 2,
  READ_ONLY = "5",
  AUTHOR = 1,
}
