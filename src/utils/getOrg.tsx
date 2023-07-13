export default function getOrg(path: string) {
  const split = path.split('/');
  return [split[4], split[5]];
}