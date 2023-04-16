 import { useAddReactionMutation } from "../../App/Redux/Contents/News/NewsSlice";
const reactionEmoji = {
    thumsUp: '👍',
    wow: '😮',
    heart : '❤️️'
}

const ReactionButton = ({newsItem }) => {
    const [addReaction ] = useAddReactionMutation()

    const reactionButtons = Object.entries( reactionEmoji).map( ([name, emoji]) => {
        console.log("newsItem : ",  newsItem )

        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => {
                    const newValue = newsItem.reactions[name] + 1 ;
                    addReaction( { 
                            newsId: newsItem.id, 
                            reactions: {...newsItem.reactions, [name]: newValue} 
                        })
                    }
                }
            >
                {emoji}  { newsItem.reactions[name] }
           </button> 
        )
    }

    ) 

    return (
        <div>{reactionButtons}</div>
    )
}

export default ReactionButton