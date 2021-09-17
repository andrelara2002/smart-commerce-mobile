import React from "react"
import ComingSoon from "../components/Util/ComingSoon"

import { useSelector } from "react-redux"

export default function CompanyCardsController() {

    const settings = useSelector(state => state.settings)

    return <ComingSoon
        text={"Tela de cartas indisponível, por favor, clique em uma empresa nas telas 'Home' ou 'Search'"}
        language={settings.app.language}
        colors={settings.app.colors}
    />
}