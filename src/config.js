const apibase = APIBASE_URL;
const healthzbase = apibase + '/healthz';
const setupzbase = apibase + '/setupz';
const ubase = apibase + '/u';
const userbase = ubase + '/user';
const passwordbase = userbase + '/password';
const authbase = ubase + '/auth';
const profilebase = apibase + '/profile';
const courierbase = apibase + '/courier';
const courierlink = courierbase + '/link';

const API = {
  setupz: setupzbase,
  healthz: {
    check: healthzbase + '/check',
  },
  u: {
    user: {
      new: userbase,
      confirm: userbase + '/confirm',
      password: {
        forgot: passwordbase + '/forgot',
        confirm: passwordbase + '/forgot/reset',
      },
      id: userbase + '/id/{0}',
      name: userbase + '/name/{0}',
      idprivate: userbase + '/id/{0}/private',
      ids: userbase + '/ids?ids={0}',
      nameprivate: userbase + '/name/{0}/private',
      get: userbase,
      sessions: userbase + '/sessions',
      edit: userbase,
      email: {
        edit: userbase + '/email',
        confirm: userbase + '/email/verify',
      },
      editpassword: userbase + '/password',
      rank: userbase + '/id/{0}/rank',
    },
    auth: {
      login: authbase + '/login',
      exchange: authbase + '/exchange',
      refresh: authbase + '/refresh',
    },
  },
  profile: {
    new: profilebase,
    edit: profilebase,
    get: profilebase,
    image: profilebase + '/image',
    id: profilebase + '/{0}',
    idimage: profilebase + '/{0}/image',
  },
  courier: {
    link: {
      get: courierlink + '?amount={0}&offset={1}',
      new: courierlink,
      id: courierlink + '/{0}',
    },
  },
};

const COURIER = {
  base: COURIERBASE_URL,
};

export {API, COURIER, mountainPreview, thamesPreview};
