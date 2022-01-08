import OptionRow from "../OptionRow/OptionRow"
export default function Select(props) {
    const { resArr, onChangeCityHandler } = props;

    return (
        <select onChange={(e) => onChangeCityHandler(e)}>
            {
                resArr.map(city => {
                    return <OptionRow city={city} />
                })
            }
        </select>
    )
}