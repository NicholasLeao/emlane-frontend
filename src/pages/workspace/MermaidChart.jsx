import React from "react";
import ReactDOM from "react-dom";
import mermaid from "mermaid";

// import "./styles.css";

mermaid.initialize({
  startOnLoad: true
});

class Mermaid extends React.Component {
  componentDidMount() {
    mermaid.contentLoaded();
  }
  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}

class Mermaid1 extends React.Component {
  componentDidMount() {
    var hack = Math.random()
      .toString(36)
      .substring(7)
      .replace(/\d/, "a");
    // mermaid.render(hack, this.props.chart);

    //    mermaid.contentLoaded();
    //setTimeout(() => mermaid.contentLoaded(), 100);
  }

  render() {
    return <div style={{ width: 500, height: 300 }}>{this.props.chart}</div>;
  }
}

export default Mermaid

// function App() {
//   return (
//     <div className="App">
//       <h1>react mermaid 2</h1>
//       <Mermaid
//         chart={`graph LR;
// A-->B;
// B-->C;
// B-->D[plop lanflz eknlzeknfz];

//       `}
//       />
//     </div>
//   );
// }

