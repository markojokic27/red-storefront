import Image from 'next/image';
import LogoIcon from './Logo';

type ProductCardProps = {
  imgPath: string;
  product: {
    name: string;
    colors: { color: string; img: string }[];
  };
  color: {
    img: string;
    color: string;
    price: number;
    discount: number;
  };
  cardKey?: number;
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <div
      key={props.cardKey}
      className="group flex cursor-pointer flex-col items-center"
    >
      <div className="relative">
        <Image
          className="object-cover"
          src={`${props.imgPath}${props.color.img}.png`}
          alt={`${props.product.name} - ${props.color.color}`}
          height={400}
          width={400}
        />
        <div className="absolute top-0 -z-20 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Image
            src={`${props.imgPath}background.png`}
            alt={`background`}
            height={400}
            width={400}
          />
        </div>
        {props.color.discount > 0 && (
          <div className="absolute bottom-2 right-2 rounded-full bg-red-700 px-1 text-xs text-white sm:px-4 sm:py-1.5">
            -{props.color.discount}%
          </div>
        )}
      </div>

      <div className="flex w-full flex-col items-center justify-start sm:flex-row sm:justify-between">
        <div className="flex h-full items-start">
          <p>{props.product.name}</p>
        </div>
        <div>
          <p className={props.color.discount > 0 ? 'text-red-700' : ''}>
            €{props.color.price * (1 - props.color.discount / 100)}
          </p>
          {props.color.discount > 0 && (
            <p className="text-gray-400 line-through">€{props.color.price}</p>
          )}
        </div>
      </div>
      <div className="mt-4 flex w-full justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:justify-start">
        {props.product.colors.map((color, key) => {
          return (
            <div key={key}>
              <LogoIcon
                colorScheme={color.color as 'white' | 'blue' | 'gray' | 'black'}
                size="sm"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
