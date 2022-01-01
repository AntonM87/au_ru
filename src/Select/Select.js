import OptionRow from "../OptionRow/OptionRow"
export default function Select(props) {
    const { resArr } = props;

    return (
        <select>
            {
                resArr.map(city => {
                    return <OptionRow city={city} />
                })
            }
        </select>
    )
}