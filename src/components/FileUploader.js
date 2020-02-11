import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";

class FileUploader extends React.Component {

    get file() {
        const file = document.getElementById("fileinput").files[0];
        if(file == null) return null;

        const formData = new FormData();

        formData.append("file", file);

        return formData;
    }

    constructor(props) {
        super(props);

        this.state = {fileNames:[]};

        this.upload = this.upload.bind(this);
    }

    upload(e){
        const fileForm = this.file;
        if (fileForm != null)
            axios.post( '/uploadfile',
                fileForm,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(function(){
                console.log('SUCCESS!!');
            })
                .catch(function(){
                    console.log('FAILURE!!');
                });
    }

    componentDidMount() {
        axios.get(`/allfiles`)
            .then(res => {
                const fileNames = res.data;
                console.log(fileNames);
                this.setState({fileNames});
            })
    }

    render() {
        return (
            <div>
                <input id="fileinput" type="file"/>
                <Button onClick={() => {console.log(this.file)}}>File</Button>
                <Button onClick={this.upload}>Upload</Button>
            </div>
        );
    }
}

export default FileUploader;