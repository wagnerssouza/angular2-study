"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contatos_mock_1 = require("./contatos-mock");
var ContatoService = (function () {
    function ContatoService() {
    }
    ContatoService.prototype.getContatos = function () {
        return Promise.resolve(contatos_mock_1.CONTATOS);
    };
    ContatoService.prototype.getContato = function (id) {
        return this.getContatos()
            .then(function (contatos) {
            return contatos.find(function (contato) {
                return contato.id === id;
            });
        });
    };
    ContatoService.prototype.getContatosSlowly = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 200);
        })
            .then(function () {
            console.log('Primeiro then');
            return 'Curso Angular 2';
        })
            .then(function () {
            console.log('Aqui chama a lista');
            return _this.getContatos();
        });
    };
    return ContatoService;
}());
ContatoService = __decorate([
    core_1.Injectable()
], ContatoService);
exports.ContatoService = ContatoService;
//# sourceMappingURL=contato.service.js.map