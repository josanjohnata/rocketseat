import { HandsClapping, Trash } from 'phosphor-react';
import styles from './comment.module.css';

export function Comment(props) {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/josanjohnata.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Josan Johnata</strong>
                            <time
                                title='29 de Julho de 2022 às 08:13h'
                                dateTime='2022-07-29 08:13:38'
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom John, parabéns!! 👏👏</p>
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