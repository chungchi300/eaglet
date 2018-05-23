import * as React from "react";
import Count from "~/containers/Count";
import Author from "~/containers/Author";
import "App.css";
class App extends React.Component<any> {
  render() {
    return (
      <div className="App">
        <Count />

        <Author />
      </div>
    );
  }
}

export default App;
