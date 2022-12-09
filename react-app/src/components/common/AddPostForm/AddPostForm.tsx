import React, {ChangeEventHandler, FC, MouseEventHandler, useState} from 'react';
import {useNavigate} from "react-router-dom";

import Input, {InputError} from "../Input/Input";
import Textarea, {TextareaError} from "../Textarea/Textarea";
import AddPostFormActions from "./AddPostFormActions/AddPostFormActions";

import {Routes} from "../../../constants/routes";
import PostsService from "../../../services/postsService";

import styles from "./AddPostForm.module.css";

interface AddPostFormState {
    title: string
    image: File | null
    imageName: string
    description: string
    text: string
}

interface IFormErrors {
    title: InputError
    image: InputError
    description: TextareaError
    text: TextareaError
}

const postFormInitialState = {
    title: "",
    image: null,
    imageName: "",
    description: "",
    text: ""
};

const initialErrorValue = {text: null, error: false};

const initialFormElementsError: IFormErrors = {
    title: initialErrorValue,
    image: initialErrorValue,
    description: initialErrorValue,
    text: initialErrorValue
};

const AddPostForm: FC = () => {

    const navigate = useNavigate();

    const [addPostForm, setPostForm] = useState<AddPostFormState>(postFormInitialState);
    const [formFieldsError, setFormFieldsError] = useState<IFormErrors>(initialFormElementsError);
    const [imagePreview, setImagePreview] = useState<any>("");

    const handleFilePreviewRemove = () => {
        setImagePreview("");
        setPostForm(prevState => ({...prevState, image: null, imageName: ""}));
    }

    const handleFileReset: MouseEventHandler<HTMLSpanElement> = (event) => {
        event.stopPropagation();
        handleFilePreviewRemove();
    }

    const handleSetTitle: ChangeEventHandler<HTMLInputElement> = ({target: {value: title}}) => {
        setFormFieldsError(prevState => ({...prevState, title: initialErrorValue}));
        setPostForm(prevState => ({...prevState, title}));
    }

    const handleSetText: ChangeEventHandler<HTMLTextAreaElement> = ({target: {value: text}}) => {
        setFormFieldsError(prevState => ({...prevState, text: initialErrorValue}));
        setPostForm(prevState => ({...prevState, text}));
    }

    const handleSetDescription: ChangeEventHandler<HTMLTextAreaElement> = ({target: {value: description}}) => {
        setFormFieldsError(prevState => ({...prevState, description: initialErrorValue}));
        setPostForm(prevState => ({...prevState, description}));
    }

    const handleSetImage: ChangeEventHandler<HTMLInputElement> = (event) => {
        const file = event?.target?.files?.[0];
        const reader = new FileReader();

        reader.addEventListener("load", () => setImagePreview(reader.result));

        if (file) {
            reader.readAsDataURL(file)
        } else {
            handleFilePreviewRemove()
        }

        setFormFieldsError(prevState => ({...prevState, image: initialErrorValue}));
        setPostForm(prevState => ({...prevState, imageName: event?.target?.value, image: file || null}));
    }

    const handleFormValidate = () => {
        let isValid = true;

        for (let field in addPostForm) {
            // @ts-ignore
            if (!addPostForm[field]) {
                // @ts-ignore
                setFormFieldsError(prevState => ({...prevState, [field]: {error: true, text: "Required field is empty"}}))
                isValid = false
            }
        }

        return isValid
    }

    const handlePostCreate = async () => {
        const isValid = handleFormValidate();

        if (isValid) {
            const data = {
                title: addPostForm.title,
                text: addPostForm.text,
                image: addPostForm.imageName,
                lesson_num: 51
            }

            await PostsService.addPost(data, localStorage.getItem("access") || "");
        }
    }

    const handleCancelPostCreation = () => {
        setPostForm(postFormInitialState);
        setFormFieldsError(initialFormElementsError);
        setImagePreview("");
    }

    const handleDeletePost = () => navigate(Routes.main);

    return (
        <form className={styles.addPostFormWrapper}>
            <div className={styles.inputsBlock}>
                <Input
                    id="title"
                    title="Title"
                    value={addPostForm.title}
                    onChange={handleSetTitle}
                    error={formFieldsError?.title}
                    required
                    placeholder="Astronauts prep for new solar arrays on nearly spacewalk"
                    className={styles.titleInput}
                />
                <Input
                    id="file"
                    title="Image"
                    value={addPostForm.imageName}
                    type="file"
                    onChange={handleSetImage}
                    onFileReset={handleFileReset}
                    error={formFieldsError?.image}
                    required
                />
            </div>
            {!!imagePreview && <img src={imagePreview} className={styles.imgPreview} alt="preview" />}
            <Textarea
                title="Description"
                id="description"
                onChange={handleSetDescription}
                value={addPostForm.description}
                error={formFieldsError?.description}
                required
                cols={40}
                rows={3}
                minLength={20}
                placeholder="Add your text"
            />
            <Textarea
                title="Text"
                id="text"
                onChange={handleSetText}
                value={addPostForm.text}
                error={formFieldsError?.text}
                required
                cols={40}
                rows={10}
                minLength={20}
                placeholder="Add your text"
            />
            <AddPostFormActions onDelete={handleDeletePost} onCancel={handleCancelPostCreation} onSubmit={handlePostCreate} />
        </form>
    );
};

export default AddPostForm;