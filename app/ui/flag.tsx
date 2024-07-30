import Image from "next/image";

const Flag = ({ source }: {source: string}) => {
    return ( 
        <Image
            src={source}
            alt="Country Flag"
            width={300}
            height={400}
        />
     );
}

export default Flag;