import Image from 'next/image';
type member = {
  nombre: string;
  rol: string;
  foto: string;
  alt?: string;
};

export default function TeamCard({nombre, rol, foto, alt }: member): React.JSX.Element {
	return(
		<article   className="flex flex-col bg-[var(--russian-violet)] rounded-[200px] justify-between w-35 sm:w-38 md:w-42 lg:w-48.5 xl:w-50 h-60 sm:h-66.5 md:h-73 lg:h-79.5 xl:h-90 gap-2.5 shrink-0 mx-[1vw] min-h-[225px]">

			{/* INFORMACIÓN DEL INTEGRANTE */}
			<header className="flex flex-col justify-center items-center flex-grow gap-y-5">
				<h2 className="max-w-1/2 break-words font-nunito text-center font-bold text-base leading-[100%] tracking-normal text-[var(--french-gray)] lg:text-lg" > {nombre} </h2>
				<p className="font-nunito font-medium text-xs leading-[100%] tracking-normal text-[var(--french-gray)] lg:text-base"> {rol} </p>
			</header>

      {/* IMAGEN DEL INTEGRANTE */}
			<figure className="w-full h-38 sm:h-44 md:h-50 lg:h-55  xl:h-62 rounded-[200px] relative object-cover aspect-square sm:aspect-2/3">
				<Image
					src={foto}
					alt={alt ?? `Foto de ${nombre}`}
					className="w-full h-full rounded-[200px] object-cover sm:aspect-2/3"
					width={140}
					height={144}
				/>
			</figure>
		</article>
	);
}