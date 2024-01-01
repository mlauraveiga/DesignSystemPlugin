import React, { useState } from "react";
import "./createDS.sass";
import PopUpWindow from "../PopUpWindowTemplate";
import FormInput from "../../Form";
import { createDesignSystem } from "../../DSCard";

const CreateDS = () => {
    const [newDesignSystem, setNewDesignSystem] = useState({
        image: '',
        title: '',
        description: '',
    });

    const handleCreate = async () => {
        try {
            const createdDesignSystem = await createDesignSystem(newDesignSystem);
            console.log('Design System created successfully:', createdDesignSystem);
        } catch (error) {
            console.error('Error creating design system:', error);
            // Handle error or display an error message
        }
    };

    return (
        <div>
            <PopUpWindow
                isOpen={true}
                handleClose={() => { }}
                content={
                    <div className="content">
                        <h1 className="content_title">Create New Design System</h1>
                        <FormInput
                            input="image"
                            label="Image"
                            type="image"
                            onChange={(value) => setNewDesignSystem({ ...newDesignSystem, image: value })}
                        />
                        <FormInput
                            input="input"
                            label="Title"
                            type="text"
                            placeholder="Add the design system title."
                            onChange={(value) => setNewDesignSystem({ ...newDesignSystem, title: value })}
                        />
                        <FormInput
                            input="textarea"
                            label="Description"
                            type="textarea"
                            placeholder="Add a brief description of the design system."
                            onChange={(value) => setNewDesignSystem({ ...newDesignSystem, description: value })}
                        />
                    </div>
                }
                secondaryButtonName="Cancel"
                primaryButtonName="Create"
                primaryButtonType="-default"
                buttonAction={handleCreate}
            />
        </div>
    );
}

export default CreateDS;