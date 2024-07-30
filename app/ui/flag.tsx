import Image from "next/image";

const Flag = ({ source }: {source: string}) => {
    return ( 
        <Image
            src={source}
            alt="Country Flag"
            width={400}
            height={500}
        />
     );
}

export default Flag;