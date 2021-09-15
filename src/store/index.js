import { createStore } from 'redux';

const initialState = {
    settings: {
        app: {
            "theme": "dark",
            "language": "pt_br",
            "colors": DefaultColors["dark"]
        },
    },
    navigation: {
        currentCompanyId: null,
    },
    locals: []
}

function settings(state = initialState, action) {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                settings: {
                    ...state.settings,
                    app: {
                        ...state.settings.app,
                        theme: action.payload
                    }
                }
            }

        case 'SET_LANGUAGE':
            return {
                ...state,
                settings: {
                    ...state.settings,
                    app: {
                        ...state.settings.app,
                        language: action.payload
                    }
                }
            }

        case 'SET_COLORS':
            return {
                ...state,
                settings: {
                    ...state.settings,
                    app: {
                        ...state.settings.app,
                        colors: action.payload
                    }
                }
            }

        case "SET_LOCALS":
            return {
                ...state,
                locals: action.payload
            }
        default:
            return state
    }
}

const store = createStore(settings);
export default store;