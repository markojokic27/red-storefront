import Image from 'next/image';
import LogoIcon from './Icons/LogoIcon';

type ProductCardProps = {
  key?: number;
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
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <div
      key={props.key}
      className="flex flex-col items-center cursor-pointer group "
    >
      <div className="relative">
        <Image
          className='object-cover'
          src={`${props.imgPath}${props.color.img}.png`}
          alt={`${props.product.name} - ${props.color.color}`}
          height={400}
          width={400}
        />
        <div className="absolute top-0 -z-20 w-full h-full  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Image
            src={`${props.imgPath}background.png`}
            alt={`background`}
            height={400}
            width={400}
          />
        </div>
        {props.color.discount > 0 && (
          <div className="absolute bottom-2 right-2 bg-red-700 text-white text-xs px-1  sm:py-1.5 sm:px-4 rounded-full">
            -{props.color.discount}%
          </div>
        )}
      </div>

      <div className="flex flex-col justify-start items-center sm:flex-row sm:justify-between w-full">
        <div className="flex items-start h-full">
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
      <div className="w-full flex justify-center sm:justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2 mt-4">
        {props.product.colors.map((color, key) => {
          return (
            <div key={key}>
              <LogoIcon colorScheme={color.color as "white" | "blue" | "gray" | "black"} size='sm'/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
