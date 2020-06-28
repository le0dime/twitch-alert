import { Api } from './Api';

export class Twitch {

    constructor() {
        this.clientId = 'qvs1nmw3e67jfyd70t9br40777xkey';
        this.accept = 'application/vnd.twitchtv.v5+json';

        this.apiInstance = new Api('https://api.twitch.tv/', {'Client-ID': this.clientId, 'Accept': this.accept});
    }

    async searchChannel(query) {
        if (!query) return [];

        let results = await this.apiInstance.get('kraken/search/channels', {query});

        return results.channels;
    }
}