import Image from 'next/image'

type TeamCardProps = {
  nombre: string;
  rol: string;
  foto: string;
  alt?: string;
};

export function TeamCard({ nombre, rol, foto, alt }: TeamCardProps): React.JSX.Element {
	return(
		<article className="">
			{/* INFORMACIÓN DEL INTEGRANTE */}
			<header className="">
				<h3 className=""> {nombre} </h3>
				<p className=""> {rol} </p>
			</header>
			<figure className="">
				<Image
					src={foto}
					alt={alt ?? `Foto de ${nombre}`}
					className=""
					width={200}
					height={500}
				/>
			</figure>
		</article>
	);
}