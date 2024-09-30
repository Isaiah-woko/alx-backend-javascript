export default function createIteratorObject(report) {
  const employees = [];

  // I Used for...in with hasOwnProperty to filter out inherited properties
  for (const department in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      employees.push(...report.allEmployees[department]);
    }
  }

  return employees[Symbol.iterator]();
}
