"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var torrent_service_1 = require("../../services/torrent.service");
var TorrentComponent = (function () {
    function TorrentComponent(torrentService) {
        this.torrentService = torrentService;
        this.torrents = [];
        this.getTorrents();
        console.log(this.torrents);
    }
    TorrentComponent.prototype.trackByTorrents = function (index, torrent) {
        return torrent.id;
    };
    TorrentComponent.prototype.getTorrents = function () {
        var _this = this;
        this.torrentService.getTorrents().debounceTime(400)
            .distinctUntilChanged()
            .subscribe(function (torrents) { return _this.torrents = torrents; }, function (error) { return _this.errorMessage = error; });
    };
    TorrentComponent.prototype.addTorrent = function (url) {
        var _this = this;
        if (!url) {
            return;
        }
        var result;
        this.torrentService.addTorrent(url)
            .subscribe(function (torrents) { return result = torrents; }, function (error) { return _this.errorMessage = error; });
    };
    TorrentComponent = __decorate([
        core_1.Component({
            selector: 'table-cmp',
            moduleId: module.id,
            providers: [torrent_service_1.TorrentService, { provide: core_1.LOCALE_ID, useValue: "fa" }],
            templateUrl: 'torrents.component.html'
        }), 
        __metadata('design:paramtypes', [torrent_service_1.TorrentService])
    ], TorrentComponent);
    return TorrentComponent;
}());
exports.TorrentComponent = TorrentComponent;
//# sourceMappingURL=torrents.component.js.map