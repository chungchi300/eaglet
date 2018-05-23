import * as React from 'react'
import Count from '~/containers/Count'
import Author from '~/containers/Author'

import 'App.css'

import { Admin, Resource } from 'react-admin'
import * as simpleRestClient from 'ra-data-simple-rest'
console.log('simpleRestClient', simpleRestClient)
import { PostList, PostEdit, PostCreate } from './post'

class App extends React.Component<any> {
  render() {
    return (
      <div className="App">
        <Admin dataProvider={simpleRestClient('http://localhost:3000')}>
          <Resource
            name="posts"
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
          />
        </Admin>
        <Count />

        <Author />
      </div>
    )
  }
}

export default App
