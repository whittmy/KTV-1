export default class SearchBar extends React.Component {

	constructor(){
		super();
		this.state = {

		}
	}

	searchSongs(){
		console.log(this.refs.textBox.value)
		this.props.onTextChanged(this.refs.textBox.value);
	}
	
  render() {
    return (
		<div className="row">
			<div className = "searchDiv">
				<form className="col-xs-12 center-text">
					<input className="form-control" id="songSearchInput" ref="textBox" 
						name="search" placeholder="Song Search..." size="50" type="text"
						onKeyUp={this.searchSongs.bind(this)}/>
				</form>
			</div>
		</div>
    );
  }
}
