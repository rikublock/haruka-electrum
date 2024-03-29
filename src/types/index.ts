import {ElectrumClient} from '../index'

export type Protocol = 'tcp' | 'tls' | 'ssl';

export type Callbacks = {
    onConnect?: (client: ElectrumClient, versionInfo: [string, string]) => void;
    onClose?: (client: ElectrumClient) => void;
    onLog?: (str: string) => void;
    onError?: (e: Error) => void;
}

export type PersistencePolicy = {
    retryPeriod?: number,
    maxRetry?: number,
    pingPeriod?: number,
    callback?: (() => void) | null
}

export type ElectrumConfig = {
    client: string;
    version: string | [string, string];
}

export type ElectrumRequestParams = Array<number | string | boolean | Array<any>>;

export type ElectrumRequestBatchParams = number | string | boolean | undefined;

export type HexString = string;

export type Balance = {
    confirmed: number;
    unconfirmed: number;
};

export type Unspent = {
    height: number;
    tx_hash: string;
    tx_pos: number;
    value: number;
};
