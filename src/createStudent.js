const createStudent = (name) => ({
  name,
  feedback() {
    return 'Eita pessoa boa!';
  },
  });

module.exports = createStudent;
