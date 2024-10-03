// src/app/components/Article.js

export default function Article() {
  const articles = [
    {
      id: 1,
      title: 'The Golden Sands Of Florida And California',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et donec purus viverra.',
      category: 'Health',
      date: '20 Maret 2024',
      imageUrl: '/images/article1.jpg',
    },
    {
      id: 2,
      title: 'Exploring The Wonders Of The Sahara Desert',
      description: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
      category: 'Travel',
      date: '15 Februari 2024',
      imageUrl: '/images/article2.jpg',
    },
    {
      id: 3,
      title: 'Healthy Eating: Tips and Tricks For A Balanced Diet',
      description: 'Curabitur blandit tempus porttitor. Donec sed odio dui.',
      category: 'Health',
      date: '10 Januari 2024',
      imageUrl: '/images/article3.jpg',
    },
    {
      id: 4,
      title: 'The Future of Technology: AI and Beyond',
      description:
        'Maecenas sed diam eget risus varius blandit sit amet non magna.',
      category: 'Technology',
      date: '30 Desember 2023',
      imageUrl: '/images/article4.jpg',
    },
    {
      id: 5,
      title: 'Sustainable Living: How To Go Green',
      description: 'Aenean lacinia bibendum nulla sed consectetur.',
      category: 'Environment',
      date: '5 November 2023',
      imageUrl: '/images/article5.jpg',
    },
    {
      id: 5,
      title: 'Rizzler God',
      description: 'Aenean lacinia bibendum nulla sed consectetur.',
      category: 'Environment',
      date: '5 November 2023',
      imageUrl: '/images/article5.jpg',
    },
  ];

  return (
    <section className='bg-[#1A2B49] py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold text-white mb-8 text-center'>
          Artikel Terbaru
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {/* {articles.map((article) => ( */}
          {articles.slice(0, 3).map((article) => (
            <div
              key={article.id}
              className='bg-[#2C3E5B] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow'
            >
              <div
                className='h-48 bg-cover bg-center'
                style={{ backgroundImage: `url(${article.imageUrl})` }}
              ></div>
              <div className='p-6 text-white'>
                <h3 className='text-lg font-semibold'>{article.title}</h3>
                <p className='text-sm mt-2'>{article.description}</p>
                <div className='flex justify-between items-center mt-4'>
                  <span className='bg-gray-700 text-xs px-3 py-1 rounded-full'>
                    {article.category}
                  </span>
                  <span className='text-sm'>{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-10'>
          <button className='bg-blue-600 text-white py-3 px-6 rounded-full text-lg'>
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
