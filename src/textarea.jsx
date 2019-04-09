import React from "react";

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);

    this.computedHeight = this.computedHeight.bind(this);

    this.shadowEle = React.createRef();
    this.inputEle = React.createRef();

    this.state = {
      value: "",
      height: ""
    };
  }

  componentDidMount() {
    this.initialHeight();
  }

  onChange(event) {
    this.setState({ value: event.target.value }, this.computedHeight);
  }

  initialHeight() {
    const ele = this.shadowEle.current;

    this.initialHeight = ele.scrollHeight;

    const fontSize = window.getComputedStyle(this.inputEle.current)["fontSize"];

    const fontSizeValue = fontSize.split("px")[0];

    // textarea 的当行默认高度，除了 line-height，还有额外不知哪来的 2px
    this.setState({ height: Number(fontSizeValue) + 2 });
  }

  computedHeight() {
    const shadowEle = this.shadowEle.current;
    const inputEle = this.inputEle.current;

    const scrollHeight = shadowEle.scrollHeight;
    const currentHeight = inputEle.clientHeight;

    if (scrollHeight === currentHeight) {
      return;
    }

    let height = "";

    if (scrollHeight > this.initialHeight) {
      height = scrollHeight;
    }

    this.setState({ height });
  }

  render() {
    return (
      <div className="ui-textarea">
        <textarea
          ref={this.shadowEle}
          className="shadow-element"
          value={this.state.value}
          readOnly={true}
          disabled={true}
        />
        <textarea
          ref={this.inputEle}
          className="input-element"
          value={this.state.value}
          onChange={event => this.onChange(event)}
          style={{ height: `${this.state.height}px` }}
          placeholder="请输入"
        />
      </div>
    );
  }
}
