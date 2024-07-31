import Image from "next/image";

const Flag = ({ source, width, height }: {width: number, height: number, source: string}) => {
    return ( 
        <Image
            src={source}
            alt="Country Flag"
            width={width}
            height={height}
        />
     );
}

export default Flag;