import Image from 'next/image'
import member from "../../../.next/static/types.js";

export default function TeamCard({nombre, rol, foto, alt }: member): React.JSX.Element {
	return(
		<article className="flex flex-col bg-[var(--russian-violet)] rounded-[200px]
             justify-between
             w-[clamp(130px,min(36.842vw,46%),150px)] md:w-[clamp(175px,18.125%,225px)] xl:w-[clamp(250px,15vw,300px)]
             h-[15.75rem] md:h-[clamp(315px,22.5vw,360px)] xl:h-[clamp(300px,25vw,400px)]
             gap-2.5
             shrink-0 mx-[1vw]">

			{/* INFORMACIÓN DEL INTEGRANTE */}
			<header className="flex flex-col justify-center items-center flex-grow gap-y-5">
				<h2 className="font-nunito font-bold text-[16px] leading-[100%] tracking-normal text-[var(--french-gray)] "> {nombre} </h2>
				<p className="font-nunito font-medium text-[12px] leading-[100%] tracking-normal text-[var(--french-gray)]"> {rol} </p>
			</header>

      {/* IMAGEN DEL INTEGRANTE */}
			<figure className="w-full h-[clamp(140px,16rem,9rem)] md:h-[clamp(140px,12rem,252px)] xl:h-[clamp(140px,15vw,252px)]
                        rounded-[200px] relative object-cover aspect-square sm:aspect-2/3">
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