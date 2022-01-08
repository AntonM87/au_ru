export default function OptionRow(props) {
    const { city } = props;
    const cityName = city.city;

    return (
        <option value={cityName}>{cityName}</option>
    )
}