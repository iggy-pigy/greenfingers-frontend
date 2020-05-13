import React from "react";



class PictureUpload extends React.Component {
    constructor() {
        super();
        this.onFileChange = this.onFileChange.bind(this);
    }

    onFileChange(e) {
        const file = e.target.files[0];
        console.log(file.name);
        console.log(file.size);
        console.log(file.type);
    }

    render() {
        return (
            <div class="form-group row">
                <label for="input2" class="col-sm-2 col-form-label">Upload plant picture</label>
                <div class="col-sm-10">
                    <input onChange={this.onFileChange} id="input2" type="file" className="new-plant-input" />
                </div>
            </div>
        );
    }
}



export default PictureUpload;