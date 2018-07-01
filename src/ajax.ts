import * as $ from 'jquery';

export class Options {
        url: string;
        method: string;
        data: Object;
        constructor(url: string, method?: string, data?: Object) {
            this.url = url;
            this.method = method || "get";
            this.data = data || {};
        }
    }

    export class Service {
        public request = (options: Options, successCallback: Function, errorCallback?: Function): void => {
            var that = this;
            $.ajax({
                url: options.url+'?json=' + encodeURIComponent(JSON.stringify(options.data)) + '&callback=?',
                type: options.method,                
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                success: function (d:any) {
                    successCallback(d);
                },
                error: function (d:any) {
                    if (errorCallback) {
                        errorCallback(d);
                        return;
                    }
                    var errorTitle = "Error in (" + options.url + ")";
                    var fullError = JSON.stringify(d);
                    console.log(errorTitle);
                    console.log(fullError);
                    that.showJqueryDialog(fullError, errorTitle);
                }
            });
        }
        public get = (url: string, successCallback: Function, errorCallback?: Function): void => {
            this.request(new Options(url), successCallback, errorCallback);
        }
        public getWithDataInput = (url: string, data: Object, successCallback: Function, errorCallback?: Function): void => {
            this.request(new Options(url, "get", data), successCallback, errorCallback);
        }
        public post = (url: string, successCallback: Function, errorCallback?: Function): void => {
            this.request(new Options(url, "post"), successCallback, errorCallback);
        }
        public postWithData = (url: string, data: Object, successCallback: Function, errorCallback?: Function): void => {
            this.request(new Options(url, "post", data), successCallback, errorCallback);
        }

        public showJqueryDialog = (message: string, title?: string, height?: number): void => {
            alert(title + "\n" + message);
            title = title || "Info";
            height = height || 120;
            message = message.replace("\r", "").replace("\n", "<br/>");
            console.log(title , message);
           
        }
    }