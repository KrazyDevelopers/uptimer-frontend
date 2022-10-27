/// <reference types="vite/client" />

interface ProcessEnv {
    REDIRECT_URI: string,
}

interface ImportMeta {
    readonly env: ProcessEnv
}

export interface guild {
    id: string,
    name: string,
    icon: string,
}

export interface guildData extends guild {
    data: {
        xp: boolean,
        welcome: {
            enable: boolean
        }
    },
    antiCase: {
        enabled: boolean
    }
    antiDuplicate: {
        enabled: boolean
    }
    antiEmoji: {
        enabled: boolean
    }
    antiLinks: {
        enabled: boolean
    }
    antiSpam: {
        enabled: boolean
    }
    antiWords: {
        enabled: boolean
    },
    error: boolean,
    message: string
}