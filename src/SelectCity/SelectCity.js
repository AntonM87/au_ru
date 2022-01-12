import DropDownList from '../DropDownList/DropDowList';

export default function SelectCity(props) {

    let { onChangeCity, cities } = props;

    return (
        <div className='selectCity'>
            <span>
                Ваш город
            </span>
            <DropDownList onChangeCity={onChangeCity} cities={cities} />
        </div>
    )
}