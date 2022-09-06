import { Link } from "react-router-dom";
import {useState} from 'react';

export function CountriesList( ) {
    const { countries, SetCountries } = useState(countriesData);

    return (
        <div>
            {countries.map((country) => {
                return (
                    <div key={country.alpha3Code} className="list-group">
                        <Link to={`/${country.alpha3Code}`} />
                            <div className="country-list">
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`} alt="" />
                            </div>
                    </div>
                )
            })}
        </div>
    )
}
