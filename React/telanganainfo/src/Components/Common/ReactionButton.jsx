import { useDispatch } from "react-redux";


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