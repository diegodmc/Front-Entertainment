import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    name: '',
    address: {
      country: '',
      state: '',
      city: '',
      street: ''
    },
    email: '',
    phone: '',
    avatarUrl: '',
    createdAt: 1555016400000
  }
];
