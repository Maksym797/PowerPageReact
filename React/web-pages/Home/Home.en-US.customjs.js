'use strict';
const e = React.createElement;

class MainForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fetchApiData: "",
      getApiData: ""
    };
  }

  componentDidMount() {
    fetch("https://site-7is6k.powerappsportals.com/documentbodies/")
      .then((respo) => {
        return respo.json();
      })
      .then((data) => {
        this.setState({ fetchApiData: data });
      });
  }
  fetchData() {
    this.setState({ getApiData: this.state.fetchApiData });
  }

  render() {
    if(this.state.fetchApiData == "") {
      return null;
    }

    return e(
      'div',
      { onClick: () => {this.fetchData()} },
      atob(this.state.fetchApiData.results[0].documentbody)
    );
  }
}

const domContainer = document.querySelector('#App');
const root = ReactDOM.createRoot(domContainer);
root.render(e(MainForm));