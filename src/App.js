import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

function App() {
    return (
        <div className="app">
            <Sidebar
                title="Propworx Property Management"
                address="1234 Main St., Suite 400, Houston TX 77001"
                properties="82"
            />
            <Main />
        </div>
    );
}

export default App;
