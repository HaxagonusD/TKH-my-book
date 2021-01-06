function Book({ title, img, description }) {
  return (
    <div>
      This is a book
      <h2>{title}</h2>
      <img src={img} alt="Book image" />
      <p>{description}</p>
    </div>
  );
}
export default Book;
