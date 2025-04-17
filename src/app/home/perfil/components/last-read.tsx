import Image from "next/image";
import Book from "/public/assets/books/Book_1.png";
import StarRating from "../../components/star-rating";

export default function LastReadCard() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-300">Há 3 dias</span>
      <div className="rounded-lg bg-gray-700 p-6">
        <div className="flex gap-6">
          <Image src={Book} alt="Capa do livro" />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-lg font-bold text-gray-100">
                Entendendo Algoritmos
              </h1>
              <span className="text-gray-400">Aditya Bhargava</span>
            </div>

            <StarRating />
          </div>
        </div>
        <p className="mt-6 text-justify text-sm text-gray-300">
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
          non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
          suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
          tristique pretium quam. Mollis et luctus amet sed convallis varius
          massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan
          curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet
          elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
          pellentesque.
        </p>
      </div>
    </div>
  );
}
