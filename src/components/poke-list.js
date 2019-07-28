import React from 'react';
import PokeContext from '../context/poke-context';
import Poke from './poke';
import Pagination from '../services/pagination';

const API_URL = "https://pokeapi.co/api/v2/pokemon/ditto/";

class PokeList extends React.Component {
    // const PokeList = () => {
    // const[pokes, setPokes] = useContext(PokeContext);
    // console.log(pokes);

    constructor(props) {
        super(props);

        this.state = {
            pokes: [],
            pageOfItems: []
        };
    }

    componentDidMount() {
        const [pokes, setPokes] = this.context;

        fetch(API_URL).then(function (response) {
            return response.text();
        }).then(function (res) {
            let body = JSON.parse(res)
            console.log(body);

            setPokes((prevPokes => [...prevPokes, ...body.game_indices]));
        });
    }

    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        const [pokes, setPokes] = this.context;
        const pageOfItems = this.state.pageOfItems;
        return (
            <div className="row">
                {pageOfItems.map((poke, index) => <Poke key={index} id={poke.game_index} version={poke.version} ></Poke>)}

                <div className="clear"></div>

                <div className="col-sm-12">
                    <Pagination items={pokes} onChangePage={this.onChangePage} />
                </div>
            </div>
        );
    }
}

PokeList.contextType = PokeContext;

export default PokeList;