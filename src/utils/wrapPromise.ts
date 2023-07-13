export function wrapPromise<T>(promise: Promise<T>) {
  let status = 'pending';
  let result: T;

  const suspend = promise
    .then((res) => {
      status = 'fulfilled';
      result = res;
    })
    .catch(() => {
      status = 'rejected';
    });

  return () => {
    if (status === 'pending') throw suspend;
    else if (status === 'fulfilled') return result;
    else throw Error('fail to fetch data');
  };
}
