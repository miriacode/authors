import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UpdateAuthor from './components/UpdateAuthor';
import Error from './components/Error';
import NewAuthor from './components/NewAuthor';
import AllAuthors from './components/AllAuthors';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <AllAuthors />} />
          <Route path="/new" render={() => <NewAuthor />} />
          <Route path="/author/edit/:id" render={() => <UpdateAuthor />}/>
          <Route path="/error" render={() => <Error />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
