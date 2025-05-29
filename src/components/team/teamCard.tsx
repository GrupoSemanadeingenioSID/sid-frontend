import Image from 'next/image'

type TeamCardProps = {
  nombre: string;
  rol: string;
  foto: string;
  alt?: string;
};

export default function TeamCard({ nombre, rol, foto, alt }: TeamCardProps): React.JSX.Element {
	return(
		<article className="flex flex-col bg-[var(--russian-violet)] rounded-[200px]
             justify-between
             flex-shrink-0
             w-[clamp(140px,45vw,175px)] md:w-[clamp(200px,20vw,200px)]
             h-[15.75rem] md:h-[clamp(252px,20rem,360px)]
             gap-2.5
             snap-start
             scroll-mx-4">
			{/* INFORMACIÓN DEL INTEGRANTE */}
			<header className="flex flex-col justify-center items-center flex-grow gap-y-5">
				<h2 className="font-nunito font-bold text-[16px] leading-[100%] tracking-normal text-[var(--french-gray)] "> {nombre} </h2>
				<p className="font-nunito font-medium text-[12px] leading-[100%] tracking-normal text-[var(--french-gray)]"> {rol} </p>
			</header>
			<figure className="w-full h-[clamp(140px,16rem,9rem)] md:h-[clamp(140px,12rem,252px)] rounded-[200px] relative object-cover aspect-square sm:aspect-2/3">
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