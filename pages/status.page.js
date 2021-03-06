var StatusPage = function () {
    this.filterStarted = element(by.css("div.btn-group label.btn-primary"));
    this.filterStopped = element(by.css("div.btn-group label.btn-danger"));
    this.filterWarning = element(by.css("div.btn-group label.btn-warning"));
    
    this.searchField = element(by.model("searchText"));

    this.adapters = element.all(by.repeater("adapter in adapters"));
    this.adapter = element.all(by.repeater("adapter in adapters")).get(0);
    this.adapterInfo = this.adapter.element(by.css('.ibox-content'));
    this.adapterInfoToggle = this.adapter.element(by.css('.ibox-title'));
    this.adapterToggle = this.adapterInfo.all(by.css('.table .btn.btn-xs')).get(0);

    this.configurations = element.all(by.repeater("configuration in configurations"));
    this.summaryAdaptersStarted = element(by.binding("adapterSummary.started"));
}

module.exports = StatusPage;
