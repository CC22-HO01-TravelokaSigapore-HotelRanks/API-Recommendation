module.exports = (user, req) => {
  if (req === undefined || req === '') {
    if (user[0] === '') {
      return `[]`;
    }

    user.forEach((value, index) => {
      if (index === 0) {
        user[index] = `'${value}'`;
        return;
      }
      user[index] = ` '${value}'`;
    });
    return `[${user}]`;
  }

  return `[${req}]`;
};
