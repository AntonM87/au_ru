import OptionRow from "../OptionRow/OptionRow"
export default function Select(props) {
    const { resArr, onChangeCity } = props;

    return (
        <select onChange={(e) => onChangeCity(e)}>
            {
                resArr.map((city, i) => {
                    return <OptionRow key={i} city={city} />
                })
            }
        </select>
    )
}