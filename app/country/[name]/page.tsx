import CountryDetails from "../../ui/countryDetails";
import { CountryData } from "../../lib/typeDef";
import { useRouter } from "next/router";
import { count } from "console";

const Page = () => {
    const router = useRouter();
    const {name, data} = router.query;

    const countryData = data ? JSON.parse(data as string) : null;
    return (
        {countryData ? <CountryDetails data={countryData} /> : <h1>Not Found</h1>}
    );
}

export default Page;
