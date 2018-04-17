import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import registerServiceWorker from './registerServiceWorker';

// import Header from "./Navbar";
// import Home from "./Home";
import Header from "./app/components/Navbar";
import Home from "./app/components/Home";

class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<div className="row">
					<div className="col-xs-10 col-md-offset-1">
						<Home/>
					</div>
				</div>
			</div>
		);
	}
}


// export default App;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();