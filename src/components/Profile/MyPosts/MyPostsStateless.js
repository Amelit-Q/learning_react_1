import React from "react";
import "./MyPosts.module.css"
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../../utilities/validators";
import { Textarea } from "../../Common/ControlForms/ControlForms";


const maxLength10 = maxLengthCreator(10)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostElement'
                    component={Textarea}
                    validate={[required, maxLength10]}
                    placeholder='Enter your message' />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddPostForRedux = reduxForm({ form: 'ProfileAddPostForm' })(AddMessageForm)

const MyPostsStateless = React.memo(props => {




    let postElements =
        this.props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} key={p.id} />)

    let onAddPost = (values) => {
        this.props.addPost(values.newPostElement)
    }

    return (
        <div className={classes.postsBlock}>
            <h2>My posts</h2>
            <div>
                <AddPostForRedux onSubmit={onAddPost} />
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>

        </div>


    )

})


export default MyPostsStateless