import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const booksData = [
	{
		book_id: 58341222,
		cover:
			"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627673942l/58341222._SY475_.jpg",
		name: "Reminders of Him",
	},
	{
		book_id: 63077284,
		cover:
			"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1666594991l/63077284._SY475_.jpg",
		name: "Resting Scrooge Face",
	},
	{
		book_id: 36809135,
		cover:
			"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1582135294l/36809135._SY475_.jpg",
		name: "Where the Crawdads Sing",
	},
	{
		book_id: 55196813,
		cover:
			"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1643228739l/55196813.jpg",
		name: "The Maid",
	},
	{
		book_id: 60899502,
		cover:
			"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1660936424l/60899502.jpg",
		name: "A World of Curiosities",
	},
];
const BookDetails = () => {
	const [book, setBooks] = useState({});

	const { id } = useParams();
	useEffect(() => {
		const found = booksData.find((element) => {
			return  element.book_id === +id
		});
		setBooks(found);
	}, [id]);

	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<img src={book.cover} alt={book.name} />
				<h2
					style={{
						textAlign: "center",
					}}
				>
					{book.name}
				</h2>
			</div>
		</>
	);
};

export default BookDetails;
