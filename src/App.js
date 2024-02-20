import HeartsList from './components/HeartsList';
import Header from './components/Header';
import './App.css';
import Heart from './components/Heart';

const App = () => {
    return (
        <div>
            <Header />
            <HeartsList />
            <Heart />
        </div>
    );
};

export default App;
