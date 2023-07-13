/**
 * @link https://deadsimplechat.com/blog/react-suspense/
 */
export function promiseWrapper<T>(promise: Promise<T>) {
  let status = 'pending';
  let result: T;

  const s = promise.then(
    (value) => {
      status = 'success';
      result = value;
    },
    (error) => {
      status = 'error';
      result = error;
    },
  );

  return () => {
    switch (status) {
      case 'pending':
        throw s;
      case 'success':
        return result;
      case 'error':
        throw result;
      default:
        throw new Error('Unknown status');
    }
  };
}
