import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

import { getCategoria, getLocal } from '../../utils'
import Loading from '../../components/Util/Loading';
import SearchView from './SearchView'

export default function SearchController(props) {

    const [categorias, setCategorias] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [locaisfilteredData, setLocaisFilteredData] = React.useState([])
    const [locaisData, setLocaisData] = React.useState([])

    function search(searchText) {
        const dataFilter = locaisData.filter(function (item) {
            return item.nome.toUpperCase().includes(searchText.toUpperCase())
        });

        setLocaisFilteredData(dataFilter)
    }

    async function getSettingsFromStorage() {
        try {
            console.log('getSettingsFromStorage')
            const categoriasData = await getCategoria()
            setCategorias(categoriasData);

            const locaisData = await getLocal()
            setLocaisData(locaisData)
            setLocaisFilteredData(locaisData)

            setLoading(false)
        }
        catch (error) {
            console.log(error)
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
            categorias={categorias}
            search={search}
            locais={locaisfilteredData}
            navigation={props.navigation}
        />
    )
}