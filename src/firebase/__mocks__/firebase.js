export function registerUser(email, password) {
  if (email === 'arkelly.perez.alayo@gmail.com' && password === '123456') {
    return Promise.resolve({
      user: {
        uid: 'abc123',
        username: 'arkelly perez alayo',
        photoURL: '',
      },
    });
  }

  return Promise.reject(new Error());
}

export function signEmail(email, password) {
  if (email === 'arkelly.perez.alayo@gmail.com' && password === '123456') {
    return Promise.resolve({
      user: {
        uid: 'abc123',
        username: 'arkelly perez alayo',
        photoURL: '',
      },
    });
  }

  return Promise.reject(new Error());
}

// export const userCollection = jest.fn();
// ........................muro...........................

// export const signUpWithEmail = jest.fn();

// export const doc = jest.fn();
// export const login = jest.fn();
// export const logOut = jest.fn();
/*
export function onGetTasks(callback) {
  callback([{
    uId: 'abc123',
    userName: 'arkelly perez alayo',
    postDescription: 'holi',
  },
  {
    uId: 'abc124',
    userName: 'Yadira Garvel',
    postDescription: 'gatito',
  }]);
}

// export const bdmuro= jest.fn();
/*
export const data = function () {
  return {
    id: '', name: '', postDescription: '', userName: '',
  };
};

export const dbdmuro = [{
  doc: {
    data: {
      id: '4nt8dM97lr9AofyQrJpG',
      postDescription: 'lmkkm',
      userName: 'arkelly perez alayo',
    },
  },
}];
x
export const callPost = (querySnapshot) => querySnapshot([
  {
    data: () => ({
      uId: '4nt8dM97lr9AofyQrJpG',
      postDescription: 'lmkkm',
      userName: 'arkelly perez alayo',

    }),

  }]); */