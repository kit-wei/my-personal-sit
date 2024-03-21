import React from 'react';
import Quill from 'quill';
import "quill/dist/quill.snow.css";
import './Blog.less'
export default class Blog extends React.Component{
    constructor(props){
        super(props);
    }
    initEditor(){
        const options = {
            debug: 'info',
            modules: {
                toolbar: {
                    container: [
                      [
                        { font: [] },
                        { size: [] },
                        { color: [] },
                        { background: [] },
                        { align: [] },
                      ],
                      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
                      ['link', 'image', 'video'],
                      ['clean'],
                    ],
                  },
                  clipboard: {
                    matchVisual: false,
                  },
            },
            placeholder: 'Compose an epic...',
            theme: 'snow'
        };
        const quill = new Quill('#editor', options);
    }
    componentDidMount(){
        this.initEditor();
    }
    render(){
        return(
            <>
                <div className="box">
                    <div className='editor-box'>
                        <div id='editor' className='editor'></div>
                    </div>
                </div>
            </>
        )
    }
}