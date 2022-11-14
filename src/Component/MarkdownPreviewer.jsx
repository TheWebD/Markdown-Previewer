import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

class MarkdownPreviewer extends React.Component {
    constructor(props){
        super(props)
        const defaultMD = 
        "# Welcome to my React Markdown Previewer! \n" +
        "## This is a sub-heading...\n" +
        "### And here's some other cool stuff:\n" +
        "Heres some code, ```<div></div>```, between 2 backticks. \n" +
        "```\n" +
        "// this is multi-line code:\n \n"+
        "function anotherExample(firstLine, lastLine) {\n"+
          "  if (firstLine == '```' && lastLine == '```') {\n"+
            "   return multiLineCode;\n"+
          "  }\n"+
        "}\n"+
        "```\n"+
        "You can also make text **bold**... whoa!\n\n" +
        "Or _italic_.\n\n "+
        "Or... wait for it... **_both!_**\n\n"+
        "And feel free to go crazy ~~crossing stuff out~~.\n\n" +
        "There's also [links](https://www.freecodecamp.org), and\n" +
        "> Block Quotes!\n\n" +
        "And if you want to get really crazy, even tables:\n" +
        "Wild Header | Crazy Header | Another Header?\n"+
        "------------ | ------------- | -------------\n"+
        "Your content can | be here, and it | can be here....\n"+
        "And here. | Okay. | I think we get it.\n\n" +
        "- And of course there are lists.\n"+
        "  - Some are bulleted.\n "+
        "   - With different indentation levels.\n"+
        "      - That look like this.\n\n"+
        "1. And there are numbered lists too.\n"+
        "1. Use just 1s if you want!\n"+
        "1. And last but not least, let's not forget embedded images:\n\n"+
        "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"

        this.state = {
            editorSize: "200px",
            previewSize: "show",
            textField:  defaultMD
        }
        
        this.clickMaximizeEditor = this.clickMaximizeEditor.bind(this);
        this.clickMinimizeEditor = this.clickMinimizeEditor.bind(this);
        this.clickMaximizePreview = this.clickMaximizePreview.bind(this);
        this.clickMinimizePreview = this.clickMinimizePreview.bind(this);
        this.onChange = this.onChange.bind(this);
        
    }
    clickMaximizeEditor(){
        this.setState({
            editorSize: "550px"
        })
    }
    clickMinimizeEditor(){
        this.setState({
            editorSize: "200px"
        })
    }
    clickMaximizePreview(){
        this.setState({
            previewSize: "hide"
        })
    }
    clickMinimizePreview(){
        this.setState({
            previewSize: "show"
        })
    }
    onChange(event){
        this.setState({
            textField: event.target.value
        })
    }
    render(){
        return(
            <div className="container">
                <div style={{
                    display: this.state.previewSize === "hide" ? "none" : ""
                }} className="editor-container" id="editor">
                    <div className="header-editor">
                        <i className="editor-icon fa-brands fa-free-code-camp"></i>
                        Editor 
                        {this.state.editorSize === "550px"
                        ? 
                        <i className="editor-close-icon fa fa-compress" onClick={this.clickMinimizeEditor}></i>
                        : 
                        <i className="editor-close-icon fa fa-arrows-alt" onClick={this.clickMaximizeEditor}></i> }
                    </div>
                    <textarea value={this.state.textField}
                        style={{
                        height: this.state.editorSize
                    }} className="body-editor" name="" id="" cols="80" rows="12" onChange={this.onChange}></textarea>
                </div>
                <div style={{
                    display: this.state.editorSize === "550px" ? "none" : ""
                }} className="preview-container" id="preview">
                    <div className="header-preview">
                        <i className="preview-icon fa-brands fa-free-code-camp"></i>
                            Preview
                        {this.state.previewSize === "show"
                        ? 
                        <i className="preview-close-icon fa fa-arrows-alt" onClick={this.clickMaximizePreview}></i> 
                        : 
                        <i className="preview-close-icon fa fa-compress" onClick={this.clickMinimizePreview}></i>
                        }
                    </div>
                    <div style={{
                        height: this.state.previewSize
                    }} className="body-preview">
                        <ReactMarkdown 
                        className="markdownPreviewer" 
                        remarkPlugins={[remarkGfm]}
                        children={this.state.textField}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default MarkdownPreviewer