//* ready state 상태
//^ 0. uninitialized
//^ 1. loading
//^ 2. loaded
//^ 3. interactive
//^ 4. complete

//* GET, POST

function xhr({
  method = 'GET',
  url,
  onSuccess,
  onFail,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}) {
  // 객체의 구조분해할당으로
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });
  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail({ messege: '에러!' });
      }
    }
  });
  xhr.send(JSON.stringify(body)); //보낼때 문자로 보내야하기때문
}

/* xhr({
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/users',
  onSuccess(data) {
    console.log(data);
  },
  onFail({ message }) {
    console.log(message);
  },
}); */

/* xhr({
  method: 'POST',
  url: 'https://jsonplaceholder.typicode.com/users',
  onSuccess(data) {
    console.log(data);
  },
  onFail({ message }) {
    console.log(message);
  },
  body: { name: 'tiger' },
}); */

xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

// xhr.delete()

/* xhr.get(
  'https://jsonplaceholder.typicode.com/users',
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
); */

//* XHR Promise API
const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMesssage: '잘안돼',
  headers: {
    'content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

function xhrPromise(options) {
  const { method, url, body, errorMesssage } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMesssage });
        }
      }
    });
  });
}

xhrPromise.get = (url) => {
  return xhrPromise({ url });
};

xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'POST',
  });
};

xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'PUT',
  });
};

xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method: 'DELETE',
  });
};
