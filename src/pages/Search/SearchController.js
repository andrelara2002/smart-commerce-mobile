import React, { useEffect } from 'react'

import { getCategoria, getLocal } from '../../utils'

import Loading from '../../components/Util/Loading';
import SearchView from './SearchView'

import { useSelector } from 'react-redux';

export default function SearchController(props) {

    const settings = useSelector(state => state.settings);
    const [categorias, setCategorias] = React.useState([]);
    const [locais, setLocais] = React.useState([]);

    const [loading, setLoading] = React.useState(true);

    async function getSettingsFromStorage() {
        try {
            const categoriasData = await getCategoria();
            const locaisData = await getLocal();
            setCategorias(categoriasData);
            setLocais(locaisData);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSettingsFromStorage();
        console.log('SEARCH CONTROLLER LOADED');
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <SearchView
            lang={settings.app.language}
            colors={settings.app.colors}
            settings={settings}
            categorias={categorias}
            locais={locais}
        />
    )
}