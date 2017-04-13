
const Markdown = React.createClass({
  getInitialState: function () {
    const original = '# Markdown Previewer\n\n## Sub-heading\n\n### Another deeper heading\n\nTwo spaces at the end of a line leave a\nline break.\n\nText attributes _italic_, *italic*, __bold__,\n**bold**, `monospace`, ~~strikethrough~~ .\n\nHorizontal rule:\n\n---\n\nBullet list:\n\n  * item1\n  * item2\n  * item3\n\nNumbered list:\n\n  1. item1\n  2. item2\n  3. item3\n\nA [link](http://example.com).'
    return { text: original };
  },

  loadMark: function () {
    const mark = marked(this.state.text);
    return { __html: mark }
  },

  handleChange: function (e) {
    const change = e.target.value;
    this.setState({
      text: change
    });
  },

	render: function () {
		return (
			<div className='row'>

			<div className='col-md-6' id='left'>
			<textarea rows='30' onChange={this.handleChange}>{this.state.text}</textarea>
			</div>
			<div className='col-md-6' id='right'>
			<div dangerouslySetInnerHTML={this.loadMark()}></div>
			</div>
			</div>
		);
	}
});
	
ReactDOM.render(<Markdown />,
document.getElementById('app'));
