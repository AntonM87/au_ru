export default function OptionRow(props) {
    const { city } = props;
    const cityName = city.city;
    const cityPopulation = city.population
    return (
        <option value={cityPopulation}>{cityName}</option>
    )
}