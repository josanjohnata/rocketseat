import Avatar from '../Avatar/Avatar';
import { HandsClapping, Trash } from 'phosphor-react';
import styles from './Comment.module.css';


function Comment({content, onDeleteComment}) {
    
    const handleDeleteComment = () => {
        console.log(`Deletando comentário: ${content}`);
        onDeleteComment(content);
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
                    <button>
                        <HandsClapping size={20}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default Comment;