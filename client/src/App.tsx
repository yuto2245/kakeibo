
import './App.css';
import AuthButton from './components/AuthButton';

const handleTestAuth = () => {
  console.log('Zaimで認証する（テスク用）');
};

function App() {
  return (
    <div>
      {/* テスト用ボタン */}
      <AuthButton 
        onClick={handleTestAuth}
      >
        Zaimで認証する（テスト用）
      </AuthButton>
    </div>
  );
}

export default App;
