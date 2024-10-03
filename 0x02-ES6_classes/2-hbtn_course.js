export default class HolbertonCourse {
  constructor(name, length, students) {
    // Validate name
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;

    // Validate length
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;

    // Validate students (should be an array)
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    this._students = students;
  }

  // Getter methods
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setter methods with validation
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Students must be an array');
    }
    this._students = newStudents;
  }
}
