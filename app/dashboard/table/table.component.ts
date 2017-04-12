import {Component, LOCALE_ID} from "@angular/core";
import {TorrentService} from "../../services/torrent.service";
import {Torrent} from "../../services/torrent";

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    providers: [TorrentService, {provide: LOCALE_ID, useValue: "fa"}],
    templateUrl: 'table.component.html'
})

export class TableComponent {
    public torrents = [];
    public errorMessage;

    constructor(private torrentService: TorrentService) {
        this.getTorrents();
        console.log(this.torrents);
    }

    trackByTorrents(index: number, torrent: Torrent): number {
        return torrent.id;
    }

    getTorrents() {
        this.torrentService.getTorrents().debounceTime(400)
            .distinctUntilChanged()
            .subscribe(
                torrents => this.torrents = torrents,
                error => this.errorMessage = <any>error);
    }

    addTorrent(url: string) {
        if (!url) {
            return;
        }
        let result;
        this.torrentService.addTorrent(url)
            .subscribe(
                torrents => result = torrents,
                error => this.errorMessage = <any>error);
    }
}
