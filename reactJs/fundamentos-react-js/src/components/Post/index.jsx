import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.css';

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src='https://github.com/josanjohnata.png'
                    />
                    <div className={styles.authorInfo}>
                        <strong>Josan Johnata</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                {/* Vou refatorar para deixar o title e dateTime para ficar dinâmico */}
                <time
                    title='29 de Julho de 2022 às 08:13h'
                    dateTime='2022-07-29 08:13:38'
                >
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{" "}
                    <a href="">#nlw</a>{" "}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>
                    Deixe seu feedback
                </strong>

                <textarea
                    placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type='submit'>
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}