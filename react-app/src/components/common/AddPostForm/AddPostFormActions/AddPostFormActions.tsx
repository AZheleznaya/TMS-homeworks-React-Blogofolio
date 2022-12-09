import React, {FC, MouseEventHandler} from 'react';

import Button, {ButtonVariantProps} from "../../Button/Button";

import styles from "./AddPostFormActions.module.css";

interface ActionsProps {
    onDelete: MouseEventHandler<HTMLButtonElement>
    onCancel: MouseEventHandler<HTMLButtonElement>
    onSubmit: MouseEventHandler<HTMLButtonElement>
}

const AddPostFormActions: FC<ActionsProps> = ({onDelete, onCancel, onSubmit}) => {
    return (
        <div className={styles.actionsWrapper}>
            <Button onClick={onDelete}>Delete post</Button>
            <Button onClick={onCancel} variant={ButtonVariantProps.secondary}>Cancel</Button>
            <Button onClick={onSubmit}>Add post</Button>
        </div>
    );
};

export default AddPostFormActions;