import { useDispatch } from "react-redux";

import { reactionAdded } from "../../App/Redux/Contents/News/NewsSlice";

const reactionEmoji = {
    thumsUP: '👍',
    wow: '😮',
    heart : '❤️️'
}

const ReactionButton = ({post }) => {

    const dispatch = useDispatch();

    const reactionButtons = Object.entries( reactionEmoji).map( ([name, emoji]) => {

        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => 
                    dispatch( reactionAdded( { newsId: post.id, reaction: name }) )
                }
            >
                {emoji}  { post.reactions[name] }
           </button> 
        )
    }

    ) 

    return (
        <div>{reactionButtons}</div>
    )
}

export default ReactionButton