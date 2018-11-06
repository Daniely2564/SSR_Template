import fetch from 'isomorphic-unfetch'
import axios from 'axios';

export default class Rendering extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.res.name}
            </div>
        )
    }
}

Rendering.getInitialProps = async function ({ req }) {

    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await axios.get(baseUrl + '/getSomething');
    const data = res.data;
    return { res: data }
}
