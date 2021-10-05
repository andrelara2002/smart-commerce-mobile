import React, { useEffect } from 'react';
import Loading from '../../components/Util/Loading';
import HomeView from './HomeView';
import { getUser, getLocal } from '../../utils'
import { useSelector } from 'react-redux';

export default function HomeController(props) {

    const settings = useSelector(state => state.settings);
    const [username, setUsername] = React.useState('');
    const [locaisVotacao, setLocaisVotacao] = React.useState([]);
    const [locais, setLocais] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    async function getSettingsFromStorage() {
        const username = await getUser();
        setUsername(username.nomeCliente)
        
        const local = await getLocal();

        setLocais(local.slice(1, 10));
        setLocaisVotacao(
            local
                .sort(function (a, b) {
                    if (a.totalVotacao < b.totalVotacao) {
                        return 1;
                    }
                    if (a.totalVotacao > b.totalVotacao) {
                        return -1;
                    }
                    return 0;
                })
                .slice(1, 6));

        setLoading(false);
    }

    useEffect(() => {
        getSettingsFromStorage();
        console.log("HOME CONTROLLER LOADED")
    }, [])

    /* constructor({ navigation }) {
        super(navigation);
        this.settings = getUser();
    } */

    if (loading) {
        return <Loading />
    }

    return (
        <HomeView
            lang={settings.app.language}
            locais={locais}

            navigation={props.navigation}

            locaisVotacao={locaisVotacao}

            //navigation={navigation}
            colors={settings.app.colors}
            username={username}
        />

    )
}