module.exports = (user, req) => {
  let newStr = '';

  if (!req) {
    if (user === null) {
      return `[]`;
    }
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

  if (user[0] === '') {
    return `['${req}']`;
  }

  // let userAttr = user.replace(/[\[\]]/g, '');
  newStr = `${req}`;
  user.push(newStr);
  user.forEach((value, index) => {
    if (index === 0) {
      user[index] = `'${value}'`;
      return;
    }
    user[index] = ` '${value}'`;
  });
  return `[${user}]`;
};
