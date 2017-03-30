// ./index.js

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

//store
import store from './store'
import Me from './Me'

render((

	<Provider store={ store }>
		<Router history={ hashHistory }>
			<Route path="/" component={ Me } />
	    </Router>
    </Provider>

), document.getElementById('_Me'));