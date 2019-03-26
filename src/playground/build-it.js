const app = {
  title: "Visibility Toggle"
};

let visible = false;

const toggleVisible = () => {
  visible = !visible;
  render();
}

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisible}>{visible ? "Hide details" : "Show details"}</button>
      {
        visible && (
          <div>
            <p>This is some text</p>
          </div>
        )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};
render();
