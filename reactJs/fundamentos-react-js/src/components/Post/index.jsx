import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.css';

export function Post({author, content, publishedAt}) {
    const [comments, setComments] = useState([1, 2, 3]);

    const publishedDateFormatted = format(
        publishedAt,
        "d 'de' LLLL 'às' HH:mm'h'",
        { locale: ptBR }
        );

    const publishedRelativeToNow = formatDistanceToNow(
        publishedAt,
        { locale: ptBR },
        { addSuffix: true }
        );

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, comments.length + 1]);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                {/* Vou refatorar para deixar o title e dateTime para ficar dinâmico */}
                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(({type, content}) => {
                    if (type === 'paragraph') {
                        return <p>{content}</p>;
                    }else if (type === 'link') {
                        return (
                            <p><a href="#">{content}</a></p>
                        );
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
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
                {comments.map(comment => {
                    return (
                        <Comment />
                    );
                })}
            </div>
        </article>
    );
}