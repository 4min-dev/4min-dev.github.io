export { };

declare global {
    interface Window {
        Telegram?: {
            WebApp: {
                expand: () => void;
                ready: () => void;
                close: () => void;
                MainButton: {
                    text: string;
                    color: string;
                    textColor: string;
                    isVisible: boolean;
                    isActive: boolean;
                    show: () => void;
                    hide: () => void;
                    enable: () => void;
                    disable: () => void;
                    onClick: (callback: () => void) => void;
                    offClick: (callback: () => void) => void;
                };
                BackButton: {
                    isVisible: boolean;
                    show: () => void;
                    hide: () => void;
                    onClick: (callback: () => void) => void;
                    offClick: (callback: () => void) => void;
                };
                initData: string;
                initDataUnsafe: unknown;
                colorScheme: string;
                themeParams: unknown;
                isExpanded: boolean;
                viewportHeight: number;
                viewportStableHeight: number;
                sendData: (data: unknown) => void;
                onEvent: (eventType: string, callback: () => void) => void;
                offEvent: (eventType: string, callback: () => void) => void;
            };
        };
    }
}