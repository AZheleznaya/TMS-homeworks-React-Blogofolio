import React, {FC} from 'react';

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import AddPostForm from "../../components/common/AddPostForm/AddPostForm";

import {PageProps} from "../../types/page";

const AddPost: FC<PageProps> = ({title= ""}) => {
    return (
        <PageWrapper title={title}>
            <AddPostForm />
        </PageWrapper>
    );
};

export default AddPost;