class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";
    const options = ['Item one', 'Item two', 'Item three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('Handle pick');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
    // alert('Remove all');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
        {
          this.props.options.map(
            opt => <Option key={opt} optionText={opt} />
          )
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>
          Option: {this.props.optionText}
        </p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option && option != "") {
      alert('handle add option ' + option);
      e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));