const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

console.log('VITE .env 접근 테스트 :: GITHUB_TOKEN : ', GITHUB_TOKEN);
function App() {
  return <>React Vite: {GITHUB_TOKEN}</>;
}

export default App;
