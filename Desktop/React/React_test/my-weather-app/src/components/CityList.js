import "./CityList.css";
function CityList(props){
    const {cities} = props;
    return (
        <div>
            <h1>CityList</h1>
            <ul>
                {cities.map((item, index) => {
                    return (
                        <a
                            className="weather-link"
                            href={"https://www.google.com/search?q=" + item +" weather"}
                            title = {item + '의 날씨'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li className={"line"} key={index}>{item}</li>
                        </a>

                    );
                })};
            </ul>
        </div>
    )
}

export  default CityList;