const axios = require('axios');

jest.mock('axios');

test('seilaman', () => {
  // const axiosMocked = axios as jest.Mocked<typeof axios>;

  axios.default.get.mockResolvedValue({ a: 'a' });

  axios.default.get('/').then((res) => console.log(res));
});
