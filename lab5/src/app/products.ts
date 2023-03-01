export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    link: string;
    image: string;
    rating: string;
    category: string;
    likes: number;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Apple iPhone 13',
      price: 799,
      description: 'A large phone with one of the best screens',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
      rating: 'https://img.freepik.com/premium-vector/five-stars-rating-review-5-yellow-rate-feedback-marks-product-evaluation-rank-appraisal-system-quality_171867-977.jpg?w=2000',
      category: 'Gadjets',
      likes: 0
    },
    {
      id: 2,
      name: 'Apple iPhone 14 Pro Max',
      price: 999,
      description: 'A great phone with one of the best cameras',
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
      rating: 'https://img.freepik.com/premium-vector/five-stars-rating-review-5-yellow-rate-feedback-marks-product-evaluation-rank-appraisal-system-quality_171867-977.jpg?w=2000',
      category: 'Gadjets',
      likes: 3
    },
    {
      id: 3,
      name: 'Apple iPhone 14',
      price: 899,
      description: 'A large phone with one of the best screens',
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000#!/item',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h41/63073057177630/apple-iphone-14-128gb-goluboj-106363150-1.jpg',
      rating: 'https://img.freepik.com/premium-vector/five-stars-rating-review-5-yellow-rate-feedback-marks-product-evaluation-rank-appraisal-system-quality_171867-977.jpg?w=2000',
      category: 'Gadjets',
      likes: 2
    },
    {
        id: 4,
        name: 'MacBook Air 13',
        price: 1599,
        description: 'A large laptop with one of the best screens',
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
        rating: 'https://img.freepik.com/premium-vector/five-stars-rating-review-5-yellow-rate-feedback-marks-product-evaluation-rank-appraisal-system-quality_171867-977.jpg?w=2000',
        category: 'Laptops',
        likes: 4
    },
    {
        id: 5,
        name: 'MacBook Pro 14',
        price: 1699,
        description: 'A large laptop with one of the best screens',
        link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/item',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
        rating: 'https://img.freepik.com/premium-vector/five-stars-rating-review-5-yellow-rate-feedback-marks-product-evaluation-rank-appraisal-system-quality_171867-977.jpg?w=2000',
        category: 'Laptops',
        likes: 1
    },
    {
        id: 6,
        name: 'Блеск для губ',
        price: 299,
        description: 'good lipgloss',
        link: 'https://kaspi.kz/shop/p/pupa-miss-pupa-gloss-blesk-dlja-gub-bezhevyi-105-majestic-nude-24700189/?c=750000000#!/item',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha9/31655728054302/pupa-miss-pupa-gloss-105-majestic-nude-24700189-1-Container.jpg',
        rating: 'https://img.freepik.com/premium-vector/five-stars-rating-review-5-yellow-rate-feedback-marks-product-evaluation-rank-appraisal-system-quality_171867-977.jpg?w=2000',
        category: 'Cosmetics',
        likes: 0
    },
    {
        id: 7,
        name: 'PUPA Volume помада бордовый',
        price: 299,
        description: 'good lipgloss',
        link: 'https://kaspi.kz/shop/p/pupa-volume-pomada-bordovyi-200-natural-24600480/?c=750000000#!/item',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/h79/31668201619486/pupa-volume-pomada-bordovyi-200-24600480-1.jpg',
        rating: 'https://img.freepik.com/premium-vector/five-stars-rating-review-5-yellow-rate-feedback-marks-product-evaluation-rank-appraisal-system-quality_171867-977.jpg?w=2000',
        category: 'Cosmetics',
        likes: 2
    },
    {
        id: 8,
        name: 'Умная колонка Яндекс Станция Мини',
        price: 799,
        description: 'good audio',
        link: 'https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-krasnyi-104010629/?c=750000000#!/item',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd9/h4b/49233382637598/yandex-mini-plyus-yndx-00020-krasnyi-104010629-1.jpg',
        rating: 'https://img.freepik.com/premium-vector/five-stars-rating-review-5-yellow-rate-feedback-marks-product-evaluation-rank-appraisal-system-quality_171867-977.jpg?w=2000',
        category: 'Audio',
        likes: 2
    }
  ];
  