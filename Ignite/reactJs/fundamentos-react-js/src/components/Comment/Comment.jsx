import Avatar from '../Avatar/Avatar';
import { HandsClapping, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { useState } from 'react';


function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);
    
    const handleDeleteComment = () => {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/diego3g.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time
                                title='29 de Julho de 2022 às 08:13h'
                                dateTime='2022-07-29 08:13:38'
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button
                            onClick={handleDeleteComment}
                            title='Deletar comentário'
                        >
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <HandsClapping size={20}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default Comment;