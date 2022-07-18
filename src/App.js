import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getCatsFetch } from './features/catState';

function App() {
  const cats = useSelector(state => state.cats.cats);
  console.log('cats', cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch])

  return (
    <div className="App">
    </div>
  );
}

export default App;
