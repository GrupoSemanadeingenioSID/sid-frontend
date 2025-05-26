import Image from 'next/image'

type TeamCardProps = {
  nombre: string;
  rol: string;
  foto: string;
  alt?: string;
};

export default function TeamCard({ nombre, rol, foto, alt }: TeamCardProps): React.JSX.Element {
	return(
		<article className="flex flex-col w-[140px] h-[252] bg-(--russian-violet) rounded-[200px] justify-center">
			{/* INFORMACIÓN DEL INTEGRANTE */}
			<header className="flex flex-col text-center">
				<h3 className=""> {nombre} </h3>
				<p className=""> {rol} </p>
			</header>
			<figure className="w-[140px] h-[144px] rounded-full relative bottom-[-30px]">
				<Image
					src={foto}
					alt={alt ?? `Foto de ${nombre}`}
					className="w-[140px] h-[144px] rounded-full"
					width={140}
					height={144}
				/>
			</figure>
		</article>
	);
}