import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';

import products from '../../../public/data/products.json';
import articles from '../../../public/data/articles.json';
import { Hero, ProductList, Info, Blog } from '~/components/sections/home';

const images: string[] = [
  'https://cdn.shopify.com/s/files/1/3009/5686/files/sliderhosecover.png?v=1716243767',
  'https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/difference_sliders-6DIUOMWB.webp',
  'https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/quotes_sliders-E2AUB3QD.webp',
];

export const loader = async () => {
  const products1 = products.filter((item) => item.category === 1).slice(0, 4);
  const products2 = products.filter((item) => item.category === 2).slice(0, 4);
  const products3 = products.filter((item) => item.category === 3).slice(0, 4);

  return json({ products1, products2, products3, articles });
};

export default function Index() {
  const { products1, products2, products3, articles } =
    useLoaderData<typeof loader>();

  return (
    <>
      <Hero carouselImages={images} />
      <div className='2xl:mx-c2xl xl:mx-cxl lg:mx-clg md:mx-cmd sm:mx-csm max-sm:mx-cxs'>
        <ProductList
          title='WELDING HELMETS WITH A PAPR'
          products={products1}
          url='/products'
        />
        <ProductList
          title='FLIP-UP WELDING HEMLETS'
          products={products2}
          url='/products'
        />
        <ProductList
          title='WELDING HELMETS WITH LARGE VIEWS AND CRISP VISION'
          products={products3}
          url='/products'
        />
      </div>
      <Info />
      <div className='mb-28 2xl:mx-c2xl xl:mx-cxl lg:mx-clg md:mx-cmd sm:mx-csm max-sm:mx-cxs'>
        <Blog articles={articles} url='/articles' />
      </div>
    </>
  );
}
