import React, { useState } from "react";
import "./form.sass";
import Button from "../Buttons/Button";
import Upload from "../../assets/icons/upload";

const FormInput = ({ input, label, type, placeholder, onChange }: { input: any, label: string, type?: string, placeholder?: string, onChange?: any }) => {
    const [imageSrc, setImageSrc] = useState('');
    const [replaceImage, setReplaceImage] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result as string);
                setReplaceImage(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleReplaceClick = () => {
        // Logic for replacing the image goes here
        // For now, let's clear the current image
        setImageSrc('');
        setReplaceImage(false);
    };

    switch (input) {
        case "input":
            return (
                <div className="form">
                    <label className="form_label">
                        {label}
                    </label>
                    <input className={"form_input" + " " + type} type={type} placeholder={placeholder} onChange={onChange} />
                </div>
            );

        case "textarea":
            return (
                <div className="form">
                    <label className="form_label">
                        {label}
                    </label>
                    <textarea className={"form_input" + " " + type} placeholder={placeholder} onChange={onChange} />
                </div>
            );

        case "image":
            return (
                <div className="form">
                    <label className="form_label">
                        {label}
                    </label>
                    <div className={"form_input" + " " + type}>
                        {!imageSrc && (
                            <div className="image_select">
                                <Upload />
                                <p className="drop">
                                    <Button name="Click to upload" priority=" terciary" type="" onClick={() => { }} />
                                    or drop image files here </p>
                                <p className="text"> Supported formats: JPG, JPEG, PNG </p>
                            </div>
                        )}

                        {imageSrc && (
                            <div className="image_select">
                                <img className="image_select_image" src={imageSrc} />
                                {replaceImage && (
                                    <div className="image_select_button" >
                                        <Button name="Replace Image" priority=" terciary" type="" onClick={handleReplaceClick} />
                                    </div>
                                )}
                            </div>
                        )}

                        <input className="input_file" type="file" onChange={handleImageChange} accept="image/*" />
                    </div>
                </div>
            );

        default:
            return (
                <div className="form">
                    <label className="form_label">
                        {label}
                    </label>
                </div>
            );
    }
};

export default FormInput;