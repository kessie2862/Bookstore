import BookList from './BookList';
import BookForm from './BookForm';

const Books = () => {
  const books = [
    {
      id: 1,
      type: 'Non-Fiction',
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      percentage: 78,
      chapter: 'Chapter 41',
    },
    {
      id: 2,
      type: 'Self-help',
      title: 'Ego is the enemy',
      author: 'Ryan Holiday',
      percentage: 12,
      chapter: 'Chapter 5',
    },
    {
      id: 3,
      type: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      percentage: 0,
      chapter: 'Introduction',
    },
  ];

  return (
    <>
      <BookList books={books} />
      <BookForm />
    </>
  );
};

export default Books;
