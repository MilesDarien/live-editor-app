import React from "react"
import {Editor, EditorState, RichUtils} from "draft-js"

class PageContainer extends React.Component<{}, {editorState: any}> {
	constructor(props: any) {
		super(props)
		this.state = {
			editorState: EditorState.createEmpty()
		}
	}

	handleKeyCommand = command => {
		const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
		if (newState) {
			this.onChange(newState)
			return "handled"
		}
		return "not-handled"
	}

	onUnderlineClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE"))
	}

	onBoldClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"))
	}

	onItalicClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC"))
	}

	onChange = (editorState: any) => {
		this.setState({
			editorState
		})
	}

	render() {
		return (
			<div className="editorContainer">
				<button onClick={this.onUnderlineClick}>U</button>
				<button onClick={this.onBoldClick}>
					<b>B</b>
				</button>
				<button onClick={this.onItalicClick}>
					<em>I</em>
				</button>
				<Editor
					editorState={this.state.editorState}
					onChange={this.onChange}
					handleKeyCommand={this.handleKeyCommand}
				/>
			</div>
		)
	}
}
export default PageContainer
