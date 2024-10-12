import { useRouter } from 'next/router';
import Navbar from '../../app/components/Navbar';
import Footer from '../../app/components/Footer';
import articlesData from '../../app/dummyData/articlesData'; // Import data artikel

{
  /* Belum Dipake  */
}

export default function ArticleDetail() {
  const router = useRouter();
  const { id } = router.query;

  const article = articlesData.find((art) => art.id === parseInt(id));

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <div className='max-w-4xl mx-auto py-16 px-4'>
        <h1 className='text-4xl font-bold mb-4'>{article.title}</h1>
        <div className='flex items-center space-x-4 mb-6'>
          <span className='bg-blue-500 text-white text-sm px-3 py-1 rounded-full'>
            {article.category}
          </span>
          <span className='text-sm text-gray-600'>{article.date}</span>
        </div>
        <img
          src={article.imageUrl}
          alt={article.title}
          className='w-full h-auto rounded-lg mb-8'
        />
        <p className='text-lg text-gray-700 leading-relaxed'>
          {article.content}
        </p>
      </div>
      <Footer />
    </div>
  );
}
