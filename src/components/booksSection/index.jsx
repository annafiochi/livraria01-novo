import BookCard from '../bookCard';
import SectionHeader from '../sectionHeader';
import styles from './booksSection.module.css';

const BooksSection = ({ books, renderStars, text, title }) => {
    return (
        <section className={styles.bookSection}>

        <SectionHeader text={text} title={"Destaques da Semana"} viewAllLink={"/destaques"}/>
        <div className={styles.booksGrid}>
          {books.map((book) => (
            <BookCard book={book} renderStars={renderStars} key={book.id} />
          ))}
        </div>
      </section>

      
    )
}


export default BooksSection