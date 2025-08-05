import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/Thixz.png"/>
          <div className={styles.authorInfo}>
            <strong>Thiago da Costa</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="04 de Agosto às 08:13" dateTime="2025-08-04 08:13:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Thiago</p>
        <p>Postei e sai correndo!</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
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
